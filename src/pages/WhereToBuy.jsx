/**
 * WhereToBuy.jsx — Official LOCTITE Where to Buy Experience
 *
 * Replicates https://www.loctiteproducts.com/where-to-buy.html
 * Features:
 * - Online Retailers (Shopee, TikTok Shop, Lazada, Ace Hardware, Handyman, Wilcon)
 * - Search by location/city/postal code
 * - Physical retail store locator with address, telephone, and map directions
 */

import { useState } from "react";
import { Link } from "react-router-dom";

const ONLINE_RETAILERS = [
  {
    id: "shopee",
    name: "Shopee",
    badge: "Official Mall",
    type: "Online Marketplace",
    url: "https://shopee.ph/",
    icon: "🛍️",
    desc: "Shop 100% authentic LOCTITE adhesives with official brand warranty and fast delivery.",
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    badge: "Authorized Seller",
    type: "Live & Video Commerce",
    url: "https://www.tiktok.com/",
    icon: "📱",
    desc: "Catch live application demonstrations and exclusive promos on official LOCTITE accounts.",
  },
  {
    id: "lazada",
    name: "Lazada",
    badge: "LazMall Flagship",
    type: "Online Marketplace",
    url: "https://www.lazada.com.ph/",
    icon: "🛒",
    desc: "Browse the complete Henkel consumer adhesives range with doorstep shipping.",
  },
  {
    id: "ace",
    name: "Ace Hardware Online",
    badge: "Hardware Partner",
    type: "Retailer Store",
    url: "https://www.acehardware.ph/",
    icon: "🔨",
    desc: "Order online or reserve for pickup at your nearest neighborhood Ace Hardware branch.",
  },
  {
    id: "wilcon",
    name: "Wilcon Depot Online",
    badge: "Construction Partner",
    type: "Building & Depot",
    url: "https://shop.wilcon.com.ph/",
    icon: "🏗️",
    desc: "Specialized construction, remodeling, and heavy-duty PL adhesive supplies.",
  },
];

const PHYSICAL_STORES = [
  {
    id: 1,
    name: "Ace Hardware — SM Megamall",
    chain: "Ace Hardware",
    address: "Lower Ground Floor, Building A, SM Megamall, EDSA, Mandaluyong City",
    phone: "(02) 8633-1678",
    distance: "1.2 km away",
    openStatus: "Open today until 9:00 PM",
    inStock: ["Super Glue Liquid Control", "Gel Control", "Ultra Gel", "Threadlocker 242"],
  },
  {
    id: 2,
    name: "Handyman Do It Best — Robinsons Galleria",
    chain: "Handyman",
    address: "Level 1, West Wing, Robinsons Galleria, Ortigas Ave, Quezon City",
    phone: "(02) 8632-1540",
    distance: "2.4 km away",
    openStatus: "Open today until 9:00 PM",
    inStock: ["Super Glue Liquid", "Gel Control", "Power Grab Express"],
  },
  {
    id: 3,
    name: "Wilcon Depot — Pasig City",
    chain: "Wilcon Depot",
    address: "C-5 Road, Brgy. Ugong, Pasig City",
    phone: "(02) 8634-8382",
    distance: "3.8 km away",
    openStatus: "Open today until 8:00 PM",
    inStock: ["PL Premium MAX", "Power Grab Express", "Ultra Gel Control", "Epoxy"],
  },
  {
    id: 4,
    name: "True Value — Shangri-La Plaza",
    chain: "True Value",
    address: "Level 5, Main Wing, Shangri-La Plaza, Mandaluyong City",
    phone: "(02) 8635-4301",
    distance: "1.6 km away",
    openStatus: "Open today until 9:00 PM",
    inStock: ["Super Glue Liquid Control", "Gel Control", "Threadlocker Blue 242"],
  },
];

export function WhereToBuy() {
  const [searchLocation, setSearchLocation] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'online' | 'stores'

  function handleSearch(e) {
    e.preventDefault();
  }

  const filteredStores = searchLocation.trim()
    ? PHYSICAL_STORES.filter(
        (s) =>
          s.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
          s.address.toLowerCase().includes(searchLocation.toLowerCase())
      )
    : PHYSICAL_STORES;

  return (
    <div className="page">
      {/* Sub-header */}
      <div className="site-subnav">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>‹</span>
          <span style={{ letterSpacing: "0.04em", textTransform: "uppercase" }}>BACK TO PRODUCTS</span>
        </Link>
        <span style={{ fontSize: "12px", color: "var(--color-brand-red)", fontWeight: 700 }}>
          WHERE TO BUY
        </span>
      </div>

      {/* Hero */}
      <section className="where-to-buy-hero">
        <div className="container container--narrow">
          <div className="loctite-logo-badge loctite-logo-badge--small" style={{ marginBottom: "16px" }}>
            <span className="loctite-logo-text">LOCTITE</span>
          </div>

          <h1 className="heading-display" style={{ fontSize: "clamp(28px, 5vw, 44px)", marginBottom: "12px" }}>
            WHERE TO BUY LOCTITE®
          </h1>
          <p className="body-lg" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Buy authentic LOCTITE adhesives directly from official online partner stores or find
            authorized hardware dealers in your area.
          </p>

          {/* Search Bar */}
          <form className="where-to-buy-search-wrap" onSubmit={handleSearch}>
            <input
              type="text"
              className="where-to-buy-input"
              placeholder="Enter city, district, or postal code..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              aria-label="Search stores by location"
            />
            <button type="submit" className="btn btn--primary">
              Find Stores
            </button>
          </form>

          {/* Filter Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
            <button
              className={`filter-chip ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All Retailers
            </button>
            <button
              className={`filter-chip ${activeTab === "online" ? "active" : ""}`}
              onClick={() => setActiveTab("online")}
            >
              Online Stores
            </button>
            <button
              className={`filter-chip ${activeTab === "stores" ? "active" : ""}`}
              onClick={() => setActiveTab("stores")}
            >
              Physical Stores
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container" style={{ padding: "48px 20px 80px" }}>
        {/* ONLINE RETAILERS SECTION */}
        {(activeTab === "all" || activeTab === "online") && (
          <section style={{ marginBottom: "64px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <h2 className="heading-xl">OFFICIAL ONLINE RETAILERS</h2>
              <span className="body-sm text-muted">Direct Delivery to Your Door</span>
            </div>

            <div className="retailers-grid">
              {ONLINE_RETAILERS.map((retailer) => (
                <div key={retailer.id} className="retailer-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "28px" }}>{retailer.icon}</span>
                    <span className="retailer-badge">{retailer.badge}</span>
                  </div>

                  <div>
                    <h3 className="heading-md" style={{ marginBottom: "2px" }}>
                      {retailer.name}
                    </h3>
                    <span style={{ fontSize: "12px", color: "var(--color-brand-blue)", fontWeight: 600 }}>
                      {retailer.type}
                    </span>
                  </div>

                  <p className="body-sm" style={{ flexGrow: 1 }}>
                    {retailer.desc}
                  </p>

                  <a
                    href={retailer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline-red btn--sm"
                    style={{ width: "100%", marginTop: "auto" }}
                  >
                    Visit Store &nbsp;↗
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PHYSICAL STORE LOCATOR SECTION */}
        {(activeTab === "all" || activeTab === "stores") && (
          <section>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "16px" }}>
              <h2 className="heading-xl">AUTHORIZED RETAIL DEALERS</h2>
              <span className="body-sm text-muted">Pick Up Today In-Store</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
              {filteredStores.map((store) => (
                <div key={store.id} className="retailer-card" style={{ borderLeft: "4px solid var(--color-brand-red)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3 className="heading-md">{store.name}</h3>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--color-brand-red)" }}>
                      {store.distance}
                    </span>
                  </div>

                  <p className="body-sm" style={{ color: "var(--color-text-secondary)" }}>
                    📍 {store.address}
                  </p>

                  <div style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>
                    📞 {store.phone}
                    <br />
                    🕒 <span style={{ color: "var(--color-success)", fontWeight: 600 }}>{store.openStatus}</span>
                  </div>

                  {/* Stock tag */}
                  <div style={{ marginTop: "6px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-dim)", textTransform: "uppercase" }}>
                      Popular in stock:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                      {store.inStock.map((item, idx) => (
                        <span key={idx} className="product-card__chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(store.name + " " + store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--secondary btn--sm"
                      style={{ flex: 1 }}
                    >
                      Directions &nbsp;↗
                    </a>
                    <Link to="/guide" className="btn btn--outline btn--sm" style={{ flex: 1 }}>
                      Check Product
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default WhereToBuy;
