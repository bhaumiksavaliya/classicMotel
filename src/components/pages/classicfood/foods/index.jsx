import React, { useEffect, useState } from "react";
import "./foods.scss";
import categoryApi from "../../../../categoryApi/categoryApi";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function Foods() {
    const defaultItemsPerPage = 10;

    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All"); // New state for category filter

    const Food = categoryApi[2].subPages[0].product;

    // Filter food items based on search query and selected category
    const filteredFood = Food.filter((item) => {
        const matchesSearch = item.Foodname.toLowerCase().includes(
            searchQuery.toLowerCase()
        );
        const matchesCategory =
            selectedCategory === "All" ||
            item.details[0].type
                .toLowerCase()
                .includes(selectedCategory.toLowerCase());
        return matchesSearch && matchesCategory;
    });

    // Calculate paginated data
    const startIndex = currentPage * itemsPerPage;
    const currentData = filteredFood.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const totalPages = Math.ceil(filteredFood.length / itemsPerPage);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(0); // Reset to the first page on new search
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0); // Reset to the first page when category changes
    };

    const dataIndex = (id) => {
        localStorage.setItem("foodindex", JSON.stringify(id));
        sessionStorage.setItem("scrollPosition", window.pageYOffset); // Save current scroll position
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 501) {
                setItemsPerPage(8);
            } else if (window.innerWidth <= 701) {
                setItemsPerPage(9);
            } else if (window.innerWidth <= 901) {
                setItemsPerPage(8);
            } else {
                setItemsPerPage(defaultItemsPerPage);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="foods">
            <div className="container">
                <div className="foodsearch-items">
                    <div className="foodsearch-bar">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="foodsearch-item-btns">
                        <div className="foodsearch-item-btn">
                            <button onClick={() => handleCategoryChange("All")}>
                                All
                            </button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button
                                onClick={() =>
                                    handleCategoryChange("Breakfast")
                                }
                            >
                                Breakfast
                            </button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button
                                onClick={() => handleCategoryChange("Lunch")}
                            >
                                Lunch
                            </button>
                        </div>
                        <div className="foodsearch-item-btn">
                            <button
                                onClick={() => handleCategoryChange("Dinner")}
                            >
                                Dinner
                            </button>
                        </div>
                    </div>
                </div>
                <div className="foods-cards">
                    {currentData.map((item, i) => (
                        <Link
                            key={i}
                            className="card"
                            to={`/fooddetail?${item.objectId}`}
                            onClick={() => dataIndex(item.objectId)}
                        >
                            <div className="card-img">
                                <img src={item.img} alt={item.Foodname} />
                            </div>
                            <div className="card-detail">
                                <h5>{item.Foodname}</h5>
                                <p>{item.details[0].type}</p>
                                <p>{item.details[1].country}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <ReactPaginate
                        pageCount={totalPages}
                        onPageChange={handlePageChange}
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        containerClassName="paginationbttns"
                        activeClassName="active"
                    />
                </div>
            </div>
        </div>
    );
}
