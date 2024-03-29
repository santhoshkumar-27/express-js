let data = require('../mock-data/data');

// read data
const getEntries = (req, res) => {
    res.json(
        {
            data
        }
    )
}

// read data by id
const getEntryById = (req, res) => {
    const { id: requestedId } = req.params
    const singleData = data.find((list) => list.id == requestedId);
    if (singleData) {
        res.json({ data: singleData });
    } else {
        res.json({
            message: 'not found'
        })
    }
}

// create a entry data
const createEntry = (req, res) => {
    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(500).json({
            message: 'failed'
        })

    }
    const { id, userId } = data[data.length - 1]
    const preparedArray = {
        title, body,
        id: id + 1,
        userId
    };
    if (preparedArray) {
        data.push(preparedArray)
        res.json({ data: preparedArray });
    } else {
        res.status(500).json({
            message: 'failed'
        })
    }
}

// update a data using put method
const updateEntryById = (req, res) => {
    const { id: requestedId } = req.params
    let findedDataIndex = data.findIndex((list) => list.id == requestedId);
    if (findedDataIndex < 0) {
        return res, status(401).json({
            message: 'not found'
        })
    }
    const { title, body } = req.body;
    let findedData = data[findedDataIndex];
    findedData = {
        ...findedData,
        title: title || findedData.title,
        body: body || findedData.body,
    }
    try {
        data[findedDataIndex] = findedData;
        res.json({ data: findedData, message: 'success' });
    } catch (e) {
        res.status(500).json({
            message: 'failed to updated'
        })
    }
};


// delete  a data using delete  method
const deleteEntryById = (req, res) => {
    const { id: requestedId } = req.params
    let findedDataIndex = data.findIndex((list) => list.id == requestedId);
    if (findedDataIndex < 0) {
        return res, status(401).json({
            message: 'not found'
        })
    }

    try {
        data.splice(findedDataIndex, 1)
        res.json({ message: 'success' });
    } catch (e) {
        res.status(500).json({
            message: 'failed to delete'
        })
    }
}

module.exports = {
    getEntries,
    getEntryById,
    createEntry,
    updateEntryById,
    deleteEntryById
}