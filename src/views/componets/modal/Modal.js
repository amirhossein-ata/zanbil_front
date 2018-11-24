import React, { Component } from 'react'
import { Button,Modal } from 'semantic-ui-react'

const ModalComponent   = defaltState => BaseComponent =>{
    return class Modal_Component extends Component {
        state = { 
            open: false, 
            button : defaltState
        }

        show = dimmer => () => this.setState({ dimmer, open: true })
        close = () => this.setState({ open: false })

        render() {
            const { open, dimmer} = this.state
            return (
                <div>
                    <Button onClick={this.show('blurring')}>{this.state.button}</Button>

                    <Modal dimmer={dimmer}  open={open} onClose={this.close} closeIcon>
                        <Modal.Content>
                            <BaseComponent passed_through_props={this.props}/>   
                        </Modal.Content>
                    </Modal>
                </div>
                )
        }
    }
}

export default ModalComponent