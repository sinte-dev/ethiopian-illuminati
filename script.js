let preview = null;
let objectUrl = null;

function clearPreview() {
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
    objectUrl = null;
  }
  if (preview) {
    preview.remove();
    preview = null;
  }
}
