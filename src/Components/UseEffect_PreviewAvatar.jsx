import React, { useEffect, useState } from "react";
//Timer: setInterval, setTimeout, clearInterval, clearTimeout


// callBack luôn được gọi sau khi component mounted
// Cleanup function luôn được gọi trước khi component unmounted
// cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
function Content() {
    const [avatar, setAvatar] = useState();
    //giải phóng bộ nhớ
    useEffect(() => {
        return () => {
           avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    }

    return (
        <div>
            <input 
             type="file"
             onChange={handlePreviewAvatar}
             />
             {avatar && (
                <img src={avatar.preview} alt="" width="80%"/>
             )}
        </div>
      );
}

export default Content;