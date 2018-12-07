import React from 'react'
import {Grid , Table,Menu ,Card,Tab, Icon,Divider} from 'semantic-ui-react'
import CardComponent from '../card/card'
import TableComponet from '../table/Table'
class Reports extends React.Component{
    
    render(){
        const upcomingReservations = this.props.reports.upcomingReservations
        const allReservations = this.props.reports.allReservations
        const customers = this.props.reports.customers
        const popularSanses = this.props.reports.busySanses
        const popularServices = this.props.reports.popularServices
        const increaseReservePercentageForDay = this.props.reports.increaseReservePercentageForDay
        const increaseReservePercentageForMonth = this.props.reports.increaseReservePercentageForMonth
        const increaseReservePercentageForWeek = this.props.reports.increaseReservePercentageForWeek
        const numberOfReservesInCurrentMonth = this.props.reports.numberOfReservesInCurrentMonth
        const numberOfReservesInCurrentWeek = this.props.reports.numberOfReservesInCurrentWeek
        const numberOfReservesInDay = this.props.reports.numberOfReservesInDay

        const panes = [
            { menuItem: 'روزرو های پیش رو', render: () => 
                <Tab.Pane>
                    <TableComponet
                        type="upcommingReservations"
                        headers={['تاریخ','زمان','سرویس']}
                        rows={upcomingReservations}
                    />
                </Tab.Pane> 
            },
            { menuItem: 'تمام رزرو ها', render: () => 
            <Tab.Pane>
                <TableComponet
                    type="allReservations"
                    headers={['تاریخ','زمان','سرویس']}
                    rows={allReservations}
                />

            </Tab.Pane> },
            { menuItem: 'مشتریان', render: () => 
            <Tab.Pane>
                <TableComponet
                    type="customers"
                    headers={['نام','ایمیل','شماره تلفن']}
                    rows={customers}
                />
            </Tab.Pane> 
        },
  
        ]
        console.log(numberOfReservesInDay)
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
                            value={numberOfReservesInDay}
                            percentage={increaseReservePercentageForDay}
                            extra="1397/02/17"
                        />
                        <br></br> 
                        <br></br>
                        <CardComponent 
                            report={true}
                            color="#A4D383"
                            header="تعداد رزرو در هفته"
                            value={numberOfReservesInCurrentWeek}
                            percentage={increaseReservePercentageForWeek}
                            extra="1397/02/17-1397/02/24"
                        />
                        <br></br><br></br>
                        <CardComponent 
                            report={true}
                            color="#EEE414"
                            header="تعداد رزرو در ماه"
                            value={numberOfReservesInCurrentMonth}
                            percentage={increaseReservePercentageForMonth}
                            extra="آذر"
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
                                
                                <TableComponet
                                    type="popularServices"
                                    headers={['نام سرویس','تعداد رزرو در ماه اخیر','تعداد رزرو در هفته ی اخیر']}
                                    rows={popularServices}
                                />
                                
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
                                <TableComponet
                                    type="popularSanses"
                                    headers={['روز هفته','زمان','تعداد رزرو']}
                                    rows={popularSanses}
                                />
                                        
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                </Grid>
            </div>

        )
    }
}

export default Reports;