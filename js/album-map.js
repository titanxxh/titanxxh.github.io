// Grid/map switch for album detail pages. scripts/album-map.js embeds the
// photo points as #album-map-data; Leaflet (self-hosted under /lib/leaflet/, so
// mainland readers need no overseas CDN) loads only when the map is opened.
(() => {
  const LIB = "/lib/leaflet/";
  const COS_HOST = "titanxxh-1259211834.cos.ap-shanghai.myqcloud.com";

  let libs = null;
  let current = null;

  function loadCss(href) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(script);
    });
  }

  function loadLibs() {
    if (!libs) {
      loadCss(LIB + "leaflet.min.css");
      loadCss(LIB + "MarkerCluster.min.css");
      libs = loadScript(LIB + "leaflet.min.js")
        .then(() => loadScript(LIB + "leaflet.markercluster.min.js"))
        .catch((error) => {
          libs = null;
          throw error;
        });
    }
    return libs;
  }

  // COS serves resized copies; other hosts get the original image.
  function thumb(url, size) {
    try {
      const parsed = new URL(url);
      if (parsed.host === COS_HOST && !parsed.search) return `${url}?imageMogr2/thumbnail/${size}`;
    } catch (_) {}
    return url;
  }

  // AMap tiles use GCJ-02 inside mainland China; album.yml stores GPS (WGS-84).
  function toGcj02([lat, lng]) {
    if (lng < 72.004 || lng > 137.8347 || lat < 0.8293 || lat > 55.8271) return [lat, lng];
    const a = 6378245.0;
    const ee = 0.00669342162296594323;
    const x = lng - 105.0;
    const y = lat - 35.0;
    let dLat = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
    dLat += ((20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0) / 3.0;
    dLat += ((20.0 * Math.sin(y * Math.PI) + 40.0 * Math.sin((y / 3.0) * Math.PI)) * 2.0) / 3.0;
    dLat += ((160.0 * Math.sin((y / 12.0) * Math.PI) + 320 * Math.sin((y * Math.PI) / 30.0)) * 2.0) / 3.0;
    let dLng = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
    dLng += ((20.0 * Math.sin(6.0 * x * Math.PI) + 20.0 * Math.sin(2.0 * x * Math.PI)) * 2.0) / 3.0;
    dLng += ((20.0 * Math.sin(x * Math.PI) + 40.0 * Math.sin((x / 3.0) * Math.PI)) * 2.0) / 3.0;
    dLng += ((150.0 * Math.sin((x / 12.0) * Math.PI) + 300.0 * Math.sin((x / 30.0) * Math.PI)) * 2.0) / 3.0;
    const radLat = (lat / 180.0) * Math.PI;
    let magic = Math.sin(radLat);
    magic = 1 - ee * magic * magic;
    const sqrtMagic = Math.sqrt(magic);
    dLat = (dLat * 180.0) / (((a * (1 - ee)) / (magic * sqrtMagic)) * Math.PI);
    dLng = (dLng * 180.0) / ((a / sqrtMagic) * Math.cos(radLat) * Math.PI);
    return [lat + dLat, lng + dLng];
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function photoIcon(L, url, count) {
    const html = `<img src="${thumb(url, "120x120")}" alt="" loading="lazy">` +
      (count > 1 ? `<span>${count}</span>` : "");
    return L.divIcon({ className: "album-map-marker", html, iconSize: [52, 52], iconAnchor: [26, 26] });
  }

  function popup(point) {
    const box = el("div", "album-map-popup");
    const img = el("img");
    img.src = thumb(point.image, "480x");
    img.width = 480;
    img.height = 320;
    img.alt = point.content;
    img.addEventListener("click", () => {
      if (window.Fancybox) window.Fancybox.show([{ src: point.image, caption: point.content }]);
      else window.open(point.image, "_blank", "noopener");
    });
    box.appendChild(img);
    box.appendChild(el("p", "", point.content));
    box.appendChild(el("div", "album-map-meta", [point.address, point.date].filter(Boolean).join(" · ")));
    return box;
  }

  function buildMap(container, points) {
    const L = window.L;
    const map = L.map(container, {
      scrollWheelZoom: false,
      worldCopyJump: true,
      minZoom: 3, // AMap serves blank tiles below zoom 3
    });
    // Dark mode inverts the AMap tiles in CSS; see source/css/album-map.css.
    L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}", {
      subdomains: "1234",
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.amap.com/">高德地图</a>',
    }).addTo(map);

    const cluster = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 50,
      iconCreateFunction: (group) =>
        photoIcon(L, group.getAllChildMarkers()[0].options.photo, group.getChildCount()),
    });
    points.forEach((point) => {
      const marker = L.marker(toGcj02(point.coord), { icon: photoIcon(L, point.image, 1), photo: point.image, title: point.content });
      marker.bindPopup(() => popup(point), { maxWidth: 280, minWidth: 240 });
      cluster.addLayer(marker);
    });
    map.addLayer(cluster);
    map.fitBounds(cluster.getBounds(), { padding: [40, 40], maxZoom: 8 });
    // Keep the poles out of the first view; popups may still pan past them.
    map.panInsideBounds([[-85, -540], [85, 540]], { animate: false });

    // Wheel zoom only after the reader engages with the map, so page scrolling still works.
    map.on("click popupopen", () => map.scrollWheelZoom.enable());
    container.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());

    return {
      map,
      destroy: () => map.remove(),
    };
  }

  function init() {
    const data = document.getElementById("album-map-data");
    const gallery = document.querySelector("#album_detail section.timeline");
    if (!data || !gallery || data.dataset.ready) return;
    data.dataset.ready = "1";

    const points = JSON.parse(data.textContent);
    const toolbar = el("div", "album-map-switch");
    const gridButton = el("button", "active", "网格");
    const mapButton = el("button", "", "地图");
    const container = el("div", "album-map");
    container.hidden = true;
    toolbar.append(gridButton, mapButton);
    gallery.before(toolbar);
    gallery.after(container);

    let built = false;
    const show = (mode) => {
      const isMap = mode === "map";
      gridButton.classList.toggle("active", !isMap);
      mapButton.classList.toggle("active", isMap);
      gallery.hidden = isMap;
      container.hidden = !isMap;
      if (!isMap) return;
      if (built) {
        if (current) current.map.invalidateSize();
        return;
      }
      built = true;
      container.textContent = "地图加载中…";
      loadLibs()
        .then(() => {
          container.textContent = "";
          current = buildMap(container, points);
        })
        .catch(() => {
          built = false;
          container.textContent = "地图加载失败，请稍后再试。";
        });
    };
    gridButton.addEventListener("click", () => show("grid"));
    mapButton.addEventListener("click", () => show("map"));
  }

  document.addEventListener("pjax:send", () => {
    if (current) current.destroy();
    current = null;
  });
  document.addEventListener("pjax:complete", init);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
