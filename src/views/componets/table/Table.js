import React from 'react'
import { Table ,Menu,Icon, Button} from 'semantic-ui-react';

class TableComponent extends React.Component{
    state={
        startIndex : 0,
        endIndex : 10
    }

    onNextClick =() => {
        let startIndex = this.state.startIndex + 10
        let endIndex = this.state.endIndex + 10
        this.setState(()=>({startIndex:startIndex,endIndex:endIndex}))

    }
    onBeforeClick = () => {
        let startIndex = this.state.startIndex - 10
        let endIndex = this.state.endIndex - 10
        this.setState(()=>({startIndex:startIndex,endIndex:endIndex}))
    }
    render(){
        let rows = this.props.rows.slice(this.state.startIndex,this.state.endIndex)
        console.log(rows)
        return(
            <Table textAlign="right" celled selectable attached={false} >
                <Table.Header>
                    <Table.Row>
                        {this.props.headers.map((header)=>(
                            <Table.HeaderCell>{header}</Table.HeaderCell>
                            ))
                        }
                    </Table.Row>
                </Table.Header>
                
                <Table.Body>
                    {rows.map((row)=>(
                        <Table.Row>
                            {row.map((cell) => (
                                <Table.Cell>{cell}</Table.Cell>
                            ))}
                        </Table.Row> 
                    ))}
                </Table.Body>
                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan="16">
                                <div style={{justifyContent:'center' ,display:'flex'}}>
                                    <Button 
                                        icon 
                                        primary 
                                        size='small' 
                                        onClick={this.onNextClick}
                                        disabled={this.state.endIndex > this.props.rows.length}
                                    >
                                        <Icon  name="angle right"/>
                                    </Button>
                                    <Button 
                                        icon 
                                        primary 
                                        size='small' 
                                        onClick={this.onBeforeClick}
                                        disabled={this.state.startIndex===0}
                                    >
                                        <Icon  name="angle left"/>
                                    </Button>
                                
                                </div>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>

        )
    }
}

export default TableComponent;