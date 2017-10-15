import React, { PureComponent } from 'react';
import TableCustom from '../../components/Table'
import ModalCustomer from '../../components/Modal'
import ContentHeader from '../../components/ContentHeader'

import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { fetchProducts } from './logic/action/fetchall'
import { createProduct } from './logic/action/create'
import { deleteProduct } from './logic/action/delete'
import { changeProduct } from './logic/action/change'
import './main.css'
import ProductFormAdd from './FormAdd'
import ProductFormDelete from './FormDelete'
import ProductFormUpdate from './FormUpdate'
import ProductItem from './Product'

class Products extends PureComponent {
    constructor() {
        super()
        this.state = {
            showModal: false,
            ModalContent: () => (<div></div>),
            itemId: null
        }
    }
    componentWillMount() {
        const { fetchProducts } = this.props;
        fetchProducts()
    }

    close = () => this.setState({ 
        showModal: false,
        ModalContent: () => (<div></div>),
        itemId: null
    })

    open = (Content, currentId) => this.setState({ 
        showModal: true,
        ModalContent: () => (
            <Content 
            close={this.close}
            itemId={currentId}
            dispatch={this.props.dispatch}
            handlerCreateProduct={this.props.createProduct}
            handlerDeleteProduct={this.props.deleteProduct}
            handlerChangeProduct={this.props.changeProduct}
            />
        ),
        itemId: currentId || null
    })

    create = () => this.open(ProductFormAdd)
    update = (id, e) => this.open(ProductFormUpdate, id)
    deleted = (id, e) => this.open(ProductFormDelete, id)
    
    render() {
        const { ModalContent, showModal } = this.state;
        const { product, createProduct } = this.props;
        const { 
            products,
            error,
            loading
         } = product.all;
        const condition = !products.length && loading;

        return (
            <div>
                <ContentHeader 
                func={this.create} title={'Products'}/>
                {
                    condition     ?
                    <h1>LOAD</h1> :
                    <TableCustom 
                        thead={["#", "Name", "Price"]}
                        tbodyData={products}
                        Tbitem={ProductItem}
                        update={this.update}
                        deleted={this.deleted}
                    />
                }
                <ModalCustomer 
                    closeHandler={this.close} 
                    showModal={showModal}
                >
                    <ModalContent/>
                </ModalCustomer >
            </div>
        );
    }
}

const mapStateToProps = (store) => ({...store})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        fetchProducts: () => dispatch(fetchProducts()),
        createProduct: (data) => dispatch(createProduct(data)),
        deleteProduct: (id) => dispatch(deleteProduct(id)),
        changeProduct: (data, id) => dispatch(changeProduct(data, id)),   
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);