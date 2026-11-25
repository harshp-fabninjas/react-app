import './css/Filter.css'
import { useState, useEffect, useRef } from 'react';

function Filter({selectedType, setSelectedType, searchQuery, setSearchQuery, setSelectedFilter, selectedFilter}) {
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <section className="filter-section">
                <div className="search-box">
                    <input
                        type="text"
                        name="app-filter"
                        className="filter-input"
                        placeholder="Search for food..."
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />

                    { searchQuery !== "" && (<button type="button" className="clear-button" aria-label="Clear search" onClick={() => setSearchQuery("")}>×</button>)}
                </div>

                <div className="filter-right">
                    <div className="type-filter">
                        <button
                            type="button"
                            className={`type-button ${selectedType === "all" ? "active" : ""}`}
                            onClick={() => setSelectedType("all")}
                        >
                            {/* 4-box grid icon */}
                            <svg className="type-icon" viewBox="0 0 16 16" fill="currentColor">
                                <rect x="1" y="1" width="6" height="6" rx="1.5" />
                                <rect x="9" y="1" width="6" height="6" rx="1.5" />
                                <rect x="1" y="9" width="6" height="6" rx="1.5" />
                                <rect x="9" y="9" width="6" height="6" rx="1.5" />
                            </svg>
                            All
                        </button>

                        <button
                            type="button"
                            className={`type-button ${selectedType === "veg" ? "active" : ""}`}
                            onClick={() => setSelectedType("veg")}
                        >
                            {/* Green square with a dot (Indian veg mark) */}
                            <svg className="type-icon" viewBox="0 0 16 16">
                                <rect x="1" y="1" width="14" height="14" rx="2" fill="#ffffff" stroke="#1b8a3a" strokeWidth="1.5" />
                                <circle cx="8" cy="8" r="3.5" fill="#1b8a3a" />
                            </svg>
                            Veg
                        </button>

                        <button
                            type="button"
                            className={`type-button ${selectedType === "non-veg" ? "active" : ""}`}
                            onClick={() => setSelectedType("non-veg")}
                        >
                            {/* Red square with a triangle (Indian non-veg mark) */}
                            <svg className="type-icon" viewBox="0 0 16 16">
                                <rect x="1" y="1" width="14" height="14" rx="2" fill="#ffffff" stroke="#c62828" strokeWidth="1.5" />
                                <polygon points="8,4 12,11 4,11" fill="#c62828" />
                            </svg>
                            Non-Veg
                        </button>
                    </div>

                    <div className="sort-wrapper" ref={sortRef}>
                        <button
                            type="button"
                            className={`sort-button ${isSortOpen ? "active" : ""}`}
                            aria-label="Filter"
                            onClick={() => setIsSortOpen(!isSortOpen)}
                        >
                            {/* Funnel icon */}
                            <svg className="sort-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                            </svg>
                        </button>

                        {/* Shows only when isSortOpen is true */}
                        <div className={`sort-dropdown ${isSortOpen ? "open" : ""}`}>
                            {/* Title on the left, Clear on the right */}
                            <div className="sort-header">
                                <p className="sort-title">Sort by price</p>
                                <button type="button" className="sort-clear" onClick={() => setSelectedFilter("")}>Clear</button>
                            </div>

                            <label className="sort-option">
                                <input type="radio" name="sort" value="low-high" onChange={(event) => setSelectedFilter(event.target.value)} checked={selectedFilter === "low-high"} />
                                Low to High
                            </label>

                            <label className="sort-option">
                                <input type="radio" name="sort" value="high-low" onChange={(event) => setSelectedFilter(event.target.value)} checked={selectedFilter === "high-low"} />
                                High to Low
                            </label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter
