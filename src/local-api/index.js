class LocalApi{
    getStorage(items){
        if(items)
        return new Promise((resolve) => {
            resolve(JSON.parse(localStorage.getItem([items])))
        })
    }
    setStorage(items, data){
        localStorage.setItem([items], JSON.stringify(data))
    }
}

export default LocalApi