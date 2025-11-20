import React, { useState } from "react";

const Api = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    const randomPage = Math.floor(Math.random() * 10) + 1;

    const response = await fetch(
      `https://picsum.photos/v2/list?page=${randomPage}&limit=10`
    );
    const data = await response.json();

    setImages(data);
    setLoading(false);
  };

  return (
    <div className="container-fluid p-4">

      {/* PAGE TITLE (same as Configuration page) */}
      <h2 className="fw-bold mb-4">API Call</h2>

      {/* CARD SECTION (same design as Configuration cards) */}
      <div className="card shadow-sm p-3">

        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="m-0">Fetch Random Images</h4>

          <button className="btn btn-primary" onClick={fetchImages}>
            Fetch Images
          </button>
        </div>

        {/* Loading text */}
        {loading && <h5 className="text-center py-3">Loading...</h5>}

        {/* Images grid (same box style) */}
        <div className="row mt-3">
          {images.map((img) => (
            <div className="col-md-3 mb-4" key={img.id}>
              <div className="card shadow-sm">
                <img
                  src={img.download_url}
                  alt={img.author}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="card-title">{img.author}</h6>
                  <a
                    href={img.download_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-primary"
                  >
                    View Full Image
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No images */}
        {!loading && images.length === 0 && (
          <p className="text-muted">Click the button to load images.</p>
        )}
      </div>
    </div>
  );
};

export default Api;
