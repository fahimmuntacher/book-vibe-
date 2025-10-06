const getStoreBook = (key) => {
    const storedBookSTR = localStorage.getItem(key);
    if(storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const setStoreBook = (key, id) => {
    const storedBookData = getStoreBook(key); 
    if(storedBookData.includes(id)) {
        alert("add hoye gese age")
    }
    else{
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem(key, data)
    }
}

const deleteId = (key ,id) => {
    const storedBookData = getStoreBook(key);
    const updateList = storedBookData.filter(bookId => bookId !== id);
    console.log(updateList);  
    const convertStr = JSON.stringify(updateList);
    localStorage.setItem(key ,convertStr)
}

export {setStoreBook, getStoreBook, deleteId}