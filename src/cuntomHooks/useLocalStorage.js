import { useState, useEffect} from 'react'

export function useLocalStorage(itemName, initialValue) {

    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(()=>{
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItems
            
                if (!localStorageItem) {
                    localStorage.setItem(itemName , JSON.stringify(initialValue))
                    parsedItems = initialValue
                } else {
                    parsedItems = JSON.parse(localStorageItem)
                }
                setItem(parsedItems)
                setLoading(false)
                
            } catch (error) {
                setError(error)
            }
        }, 1000)
    })

    const saveItem = (newItem) => {

        try {
            const stringifiedItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)
            
        } catch (error) {
            setError(error)
        }     
    }

    return {
        item, 
        saveItem,
        error,
        loading
    }
}


