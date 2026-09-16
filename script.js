function showFile(file) {
  clearPreview();

  preview = document.createElement("div");
  preview.className = "file-preview";

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "";
      preview.appendChild(img);
    };

    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = `
      <div class="file-preview-doc">
        <svg viewBox="0 0 24 24" width="28" height="28"
          fill="none" stroke="currentColor" stroke-width="1.6">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
        </svg>
        <span>${file.name}</span>
      </div>
    `;
  }

  dropzone.insertAdjacentElement("afterend", preview);
  container.classList.add("has-file");
  actions.hidden = false;
}
