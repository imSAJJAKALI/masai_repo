import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
    const [UserOnline, setUserOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setUserOnline(true)
    const handleOffline = () => setUserOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)

    }


  }, [])


  return UserOnline
}

export default useOnlineStatus