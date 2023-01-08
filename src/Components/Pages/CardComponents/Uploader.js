import React, { useState } from "react";
import "./uploade.css";

import { IoMdCloudUpload, MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const Uploader = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <main>
      <form
        className="file-frm"
        action=""
        onClick={() => document.querySelector(".file-input").click()}
      >
        <input
          type="file"
          className="file-input"
          accept="file/*"
          hidden
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        {image ? (
          <img src={image} width={60} height={60} alt={fileName} />
        ) : (
          <div>
            <MdCloudUpload color="blue" size={60} /> <p>Upload Your file</p>
          </div>
        )}
      </form>
    </main>
  );
};

export default Uploader;
