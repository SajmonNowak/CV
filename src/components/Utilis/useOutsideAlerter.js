import React, {useEffect} from 'react'

const useOutsideAlerter = (ref, closeEdit) => {
    useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            closeEdit();
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {

          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
  
}

export default useOutsideAlerter