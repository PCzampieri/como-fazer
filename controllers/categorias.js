const api = require('../api')

const novaForm = (req, res) => {
    res.render('categorias/nova')
}
const nova = async(req, res) => {
    await api.create('categoria', {
       categoria: req.body.categoria 
    })
    res.redirect('/categorias')
}
const list = async(req, res) => {
    const categorias = await api.list('categoria')
    res.render('categorias/index', { categorias })     
 }
 const excluir = async(req, res) => {
    await api.apagar('categoria', req.params.id)  
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/categorias')
}
const editarForm = async(req, res) => {
    const categoria = await api.get('categoria', req.params.id)
    res.render('categorias/editar', { categoria })
}
const editar = async(req, res) => {
    await api.update('categoria', req.params.id, {
       categoria: req.body.categoria 
    })
    res.redirect('/categorias')
}

module.exports = {
    novaForm, nova, list, 
    excluir, editarForm, editar
}