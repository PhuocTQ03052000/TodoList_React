import React, { useEffect, useState, useLayoutEffect } from "react";
//Timer: setInterval, setTimeout, clearInterval, clearTimeout
/**
 * useEffect
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Render lại UI
 * 4. Gọi cleanup nếu deps thay đổi
 * 5. Gọi gọi useEffect callBack
 * 
 * useLayoutEffect
 * 1. Cập nhật lại state
 * 2. Cập nhật DOM(mutated)
 * 3. Gọi cleanup nếu deps thay đổi (sync)
 * 4. Gọi gọi useLayoutEffect callBack(sync)
 * 5. Render lại UI
 */

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
        e.target.value = null;

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