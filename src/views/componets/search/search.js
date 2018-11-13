import React from 'react'
import {connect} from 'react-redux'
import {Form, Segment , Label} from 'semantic-ui-react'
import {categories} from '../../../core/constants'
import {send_search_filters} from '../../../core/search/search_actions'
class Search extends React.Component{
    state = {
        search_filters:{
            service_name:'',
            business_name:'',
            category:'',
            min_price:'',
            max_price:''
        }
    }
    handle_change= (e) => {
        const input = e.target.value;
        const inputName = e.target.name;

        if(inputName === 'min_price' || inputName === 'max_price'){
            const isnum = /^-?\d*\.?\d*$/.test(input);
            if(! isnum){
                return
            }
        }
        
        let search_filters = this.state.search_filters;
        
        search_filters[inputName] = input;
        console.log(search_filters)
        this.setState(() => ({search_filters:search_filters}))    
    }

    on_blur = () => {
        this.props.send_search_filters(this.state.search_filters)
    }
    on_category_change = (e, {value}) => {
        let search_filters = this.state.search_filters;
        search_filters.category = value.toString();
        this.setState(() => ({search_filters:search_filters}));
    }

    render(){
        return(
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            name="service_name" 
                            fluid 
                            label='نام سرویس'
                            value={this.state.search_filters.service_name}    
                            onChange={this.handle_change}
                            onBlur={this.on_blur}
                        />
                        <Form.Input
                            name="business_name" 
                            fluid 
                            label='نام کسب و کار' 
                            onChange={this.handle_change}
                            value={this.state.search_filters.business_name}
                            onBlur={this.on_blur}
                        
                        />
                        <Form.Select
                            name="category" 
                            fluid 
                            label='دسته بندی' 
                            onChange={this.on_category_change}
                            options={categories}
                            onBlur={this.on_blur}
                        />
                    </Form.Group>
                    <Form.Group >
                        <div style={{display:'flex' ,width:'100%' ,justifyContent:'center'}}>

                            <Form.Input
                                name="min_price" 
                                width="3" 
                                label='حداقل قیمت' 
                                onChange={this.handle_change}
                                value={this.state.search_filters.min_price}    
                                onBlur={this.on_blur}                            
                            />

                            <Form.Input
                                name="max_price" 
                                width="3" 
                                label='حداکثر قیمت' 
                                onChange={this.handle_change}    
                                value={this.state.search_filters.max_price}    
                                onBlur={this.on_blur}
                            
                            />
                        </div>        
                    </Form.Group>

                    <Form.Button>ثبت</Form.Button>
                </Form>
        
            )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        send_search_filters : (search_filters) => dispatch(send_search_filters(search_filters)) 
    }
}

export default connect(undefined,mapDispatchToProps)(Search);