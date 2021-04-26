import React, { useState } from "react";
import camera_png from "../../assets/images/camera.png";
const Posts = (props) => {
  const [filesUpload, setFilesUpload] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [description, setDescription] = useState("");
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFilesUpload(Array.from(e.target.files));

      // console.log("filesArray: ", filesArray);

      setSelectedFiles(filesArray);
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  return (
    <div className="container small border-radius">
      <section id="shop-info">
        <div className="row mb-5 py-4 alert alert-light">
          <div className="col-md-4">
            <div className="form-group-upload-image border-radius position-relative h-100">
              {selectedFiles.length !== 0 && (
                <div className="preview border-radius d-block position-absolute start-0">
                  <img
                    className="h-100 w-100 border-radius"
                    src={selectedFiles}
                    alt="Preview Logo Landing"
                  />
                </div>
              )}
              <div className="content d-flex align-items-center justify-content-center border-radius h-100 cursor-pointer">
                <img className="mr-2" src={camera_png} alt="" />
                <span>Chose a file or drag image it here</span>
              </div>
              <input
                accept="image/*"
                className="position-absolute h-100 w-100"
                id="contained-button-file"
                type="file"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="col-md-8">
            <textarea
              className="form-control border border-secondary"
              id="exampleFormControlTextarea1"
              rows="10"
              placeholder="Something about description"
            ></textarea>
          </div>
        </div>
        <div className="row mb-5 bg-white">
          <button type="button" className="btn btn-danger">
            Thêm
          </button>
        </div>
      </section>
    </div>
  );
};

export default Posts;
