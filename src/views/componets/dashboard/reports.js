import React from 'react'
import {Grid , Table,Menu ,Card,Tab, Icon,Divider} from 'semantic-ui-react'
import CardComponent from '../card/card'
import TableComponet from '../table/Table'
class Reports extends React.Component{
    render(){
        const panes = [
            { menuItem: 'روزرو های پیش رو', render: () => 
                <Tab.Pane>
                    <TableComponet
                        headers={['تاریخ','زمان','سرویس']}
                        rows={[
                            ['1397/02/1','8:30','کوتاهی مو'],
                            ['1397/02/2','8:30','کوتاهی مو'],
                            ['1397/02/3','8:30','کوتاهی مو'],
                            ['1397/02/4','8:30','کوتاهی مو'],
                            ['1397/02/5','8:30','کوتاهی مو'],
                            ['1397/02/6','8:30','کوتاهی مو'],
                            ['1397/02/7','8:30','کوتاهی مو'],
                            ['1397/02/8','8:30','کوتاهی مو'],
                            ['1397/02/9','8:30','کوتاهی مو'],
                            ['1397/02/10','8:30','کوتاهی مو'],  
                            ['1397/02/11','8:30','کوتاهی مو'],
                            ['1397/02/12','8:30','کوتاهی مو'],
                            ['1397/02/13','8:30','کوتاهی مو'],
                            ['1397/02/14','8:30','کوتاهی مو'],
                            ['1397/02/15','8:30','کوتاهی مو'],
                            ['1397/02/16','8:30','کوتاهی مو'],
                            ['1397/02/17','8:30','کوتاهی مو'],
                            ['1397/02/18','8:30','کوتاهی مو'],
                            ['1397/02/19','8:30','کوتاهی مو'],
                            ['1397/02/20','8:30','کوتاهی مو'],
                            ['1397/02/21','8:30','کوتاهی مو'],
                            ['1397/02/22','8:30','کوتاهی مو'],
                            ['1397/02/23','8:30','کوتاهی مو'],
                            ['1397/02/24','8:30','کوتاهی مو'],
                        ]}
                    />
                </Tab.Pane> 
            },
            { menuItem: 'تمام رزرو ها', render: () => 
            <Tab.Pane>
                <TableComponet
                    headers={['تاریخ','زمان','سرویس']}
                    rows={[
                            ['1397/02/1','8:30','کوتاهی مو'],
                            ['1397/02/2','8:30','کوتاهی مو'],
                            ['1397/02/3','8:30','کوتاهی مو'],
                            ['1397/02/4','8:30','کوتاهی مو'],
                            ['1397/02/5','8:30','کوتاهی مو'],
                        ]}
                />

            </Tab.Pane> },
            { menuItem: 'مشتریان', render: () => 
            <Tab.Pane>
                <TableComponet
                    headers={['تاریخ','زمان','سرویس']}
                    rows={[
                            ['1397/02/12','8:30','کوتاهی مو'],
                            ['1397/02/12','8:30','کوتاهی مو'],
                            ['1397/02/12','8:30','کوتاهی مو'],
                            ['1397/02/12','8:30','کوتاهی مو'],
                            ['1397/02/12','8:30','کوتاهی مو'],
                        ]}
                />
            </Tab.Pane> 
        },
  
        ]
  
        return(
            <div>
                <Grid centered>

                    <Grid.Column computer={10}>
                        <Tab menu={{color:'blue' ,inverted:true }} panes={panes} />
                    </Grid.Column>
                    <Grid.Column computer={5}>
                        <CardComponent 
                            report={true}
                            color="#78DDE9"
                            header="تعداد رزرو در روز"
                            value="4"
                            percentage="-2"
                            extra="1397/02/12"
                        />
                        <br></br> 
                        <br></br>
                        <CardComponent 
                            report={true}
                            color="#A4D383"
                            header="تعداد رزرو در هفته"
                            value="8"
                            percentage="5"
                            extra="1397/02/07-1397/02/14"
                        />
                        <br></br><br></br>
                        <CardComponent 
                            report={true}
                            color="#EEE414"
                            header="تعداد رزرو در ماه"
                            value="25"
                            percentage="7"
                            extra="فروردین"
                        />
                    </Grid.Column>
                </Grid>
                <Divider hidden/>
                <Grid centered>
                    <Grid.Column computer={7}>
                        <Card fluid>
                            <Card.Content style={{background:'#14C3EE'}}>
                                <Card.Header>
                                    <span style={{display:'flex',justifyContent:'space-between',color:'white'}}>
                                        <p>محبوب ترین سرویس ها</p>
                                        <Icon name="exclamation" />
                                    </span>
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Table celled selectable attached={false} >
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>نام سرویس </Table.HeaderCell>
                                            <Table.HeaderCell>تعداد رزرو در ماه اخیر</Table.HeaderCell>
                                            <Table.HeaderCell>تعداد رزرو در هفته ی اخیر</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Jamie</Table.Cell>
                                            <Table.Cell>Approved</Table.Cell>
                                            <Table.Cell>Requires call</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Jill</Table.Cell>
                                            <Table.Cell>Denied</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                    
                                    </Table.Body>
                                </Table>

                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column computer={1}></Grid.Column>
                    <Grid.Column computer={7}>
                        <Card fluid>
                            <Card.Content style={{background:'#14C3EE'}}>
                                <Card.Header>
                                    <span style={{display:'flex',justifyContent:'space-between',color:'white'}}>
                                        <p>پرکار ترین ساعت ها</p>
                                        <Icon name="exclamation" />
                                    </span>
                                </Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <Table celled selectable attached={false} >
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>روز هفته</Table.HeaderCell>
                                            <Table.HeaderCell>زمان</Table.HeaderCell>
                                            <Table.HeaderCell>متوسط تعداد روزرو در هفته</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Jamie</Table.Cell>
                                            <Table.Cell>Approved</Table.Cell>
                                            <Table.Cell>Requires call</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Jill</Table.Cell>
                                            <Table.Cell>Denied</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>John</Table.Cell>
                                            <Table.Cell>No Action</Table.Cell>
                                            <Table.Cell>None</Table.Cell>
                                        </Table.Row>
                                        
                                    </Table.Body>
                                </Table>
                                        
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                </Grid>
            </div>

        )
    }
}

export default Reports;