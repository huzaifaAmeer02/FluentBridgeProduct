import coverImageSrc from "../../assets/cover-user.jpg";
import { useRef, useState } from 'react';

export default function Cover() {
  const [coverImage, setCoverImage] = useState(null);
  const inputRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openChooseFile = () => {
    inputRef.current.click();
  };

  const handleChangeCover = event => {
    const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
    const selected = event.target.files[0];

    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => setCoverImage(reader.result);
      reader.readAsDataURL(selected);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 'xl', width: '100%', height: '400px', overflow: 'hidden', position: 'relative' }}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={coverImage || coverImageSrc}
          alt="Cover"
        />
        <input ref={inputRef} type="file" onChange={handleChangeCover} hidden />
        <button
          style={{ position: 'absolute', bottom: '10px', right: '10px', padding: '10px', fontWeight: 'bold', borderRadius: '20px', backgroundColor: '#1F2937', color: 'white' }}
          onClick={openChooseFile}
        >
          Change Cover
        </button>
      </div>
      {isModalOpen && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', zIndex: '9999' }}>
          <h2>Something went wrong</h2>
          <p>File not supported!</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <span style={{ color: '#6C757D', fontSize: '14px' }}>Supported types:</span>
            <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>PNG</span>
            <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>JPG</span>
            <span style={{ marginLeft: '5px', marginRight: '5px', backgroundColor: '#198754', color: '#fff', padding: '3px 6px', borderRadius: '4px' }}>JPEG</span>
          </div>
          <button style={{ marginTop: '10px' }} onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}
