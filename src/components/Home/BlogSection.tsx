import React from 'react'

const BlogSection = () => {
  return (
    <>
    <main>
        <div>
            <div className="main-container">
                <div className="flex justify-between items-center">
                    <h2 className="font-serif font-medium text-5xl mb-4">Latest Stories</h2>
                    <button className="btn-rounded-md-black">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className=' min-h-72 '>
                        <div className="blog-card-image">
                            <img src="/blog-image-1.png" alt="" />
                        </div>
                        <div className="blog-card-content">
                            <h3 className="font-serif font-medium text-3xl mb-4">The Power of Curiosity</h3>
                            <p className="font-sans font-normal text-lg mb-6">Curiosity is the engine of achievement. It drives our learning and creativity.</p>
                            <button className="btn-rounded-md-black">Read More</button>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img src="/blog-image-2.png" alt="" />
                        </div>
                        <div className="blog-card-content">
                            <h3 className="font-serif font-medium text-3xl mb-4">The Power of Curiosity</h3>
                            <p className="font-sans font-normal text-lg mb-6">Curiosity is the engine of achievement. It drives our learning and creativity.</p>
                            <button className="btn-rounded-md-black">Read More</button>
                        </div>
                    </div>
                    <div className="blog-card">
                        <div className="blog-card-image">
                            <img src="/blog-image-3.png" alt="" />
                        </div>
                        <div className="blog-card-content">
                            <h3 className="font-serif font-medium text-3xl mb-4">The Power of Curiosity</h3>
                            <p className="font-sans font-normal text-lg mb-6">Curiosity is the engine of achievement. It drives our learning and creativity.</p>
                            <button className="btn-rounded-md-black">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default BlogSection