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
        let rows =this.props.rows ? this.props.rows.slice(this.state.startIndex,this.state.endIndex) : []
        
        let type = this.props.type
        return(
            <div>
                {type==="customers" && (
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
                        {rows.length !== 0 && rows.map((cells)=>(
                            <Table.Row>
                            {console.log('cells ' , cells)}
                            
                                    <Table.Cell>{cells.firstname} {cells.lastname}</Table.Cell>
                                    <Table.Cell>{cells.Email}</Table.Cell>
                                    <Table.Cell>{cells.phone_number}</Table.Cell>
                                
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
                )}
                {type==="allReservations" && (
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
                        {rows.length !== 0 && rows.map((cells)=>(
                            <Table.Row>
                            {console.log('cells ' , cells)}
                                <Table.Cell>{cells.serviceName}</Table.Cell>
                                <Table.Cell>{cells.date}/</Table.Cell>
                                <Table.Cell>{cells.start_time}-{cells.end_time}</Table.Cell>
                            
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
                )}
                {type==="upcommingReservations" && (
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
                        {rows.length !== 0 && rows.map((cells)=>(
                            <Table.Row>
                                {console.log('cells ' , cells)}
                                <Table.Cell>{cells.serviceName}</Table.Cell>
                                <Table.Cell>{cells.date}/</Table.Cell>
                                <Table.Cell>{cells.start_time}-{cells.end_time}</Table.Cell>
                                
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
                )}
                {type==="popularServices" && (
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
                        {rows.length !== 0 && rows.map((cells)=>(
                            <Table.Row>
                                    {console.log('cells ' , cells)}
                                    <Table.Cell>{cells.name}</Table.Cell>
                                    <Table.Cell>{cells.numberOfReservesInCurrentMonth}</Table.Cell>
                                    <Table.Cell>{cells.TnumberOfReservesInCurrentWeek}</Table.Cell>
        
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
                )}
                {type==="popularSanses" && (
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
                        {rows.length !== 0 && rows.map((cells)=>(
                            <Table.Row>
                                    {console.log('cells ' , cells)}
                                    <Table.Cell>{cells.count}</Table.Cell>
                                    <Table.Cell>{cells.start_time}-{cells.end_time}</Table.Cell>
                                    <Table.Cell>{cells.weekday}</Table.Cell>

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
                    
                )}
            </div>
                           
            



        )
    }
}

export default TableComponent;