import React from 'react';

const BlogSearch = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

    return (
        <>
            <div className="sidebar-widget blog-search">
                <div className="blog-search-bar">
                    <form onSubmit={handleSearch}>
                        <input type="text" name="search" placeholder='Enter Keyword' />
                        <div className="blog-search-btn">
                            <button><i className="ri-search-line"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BlogSearch;