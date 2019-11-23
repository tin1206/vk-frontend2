import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Transfer } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetch_client_list} from '../../redux/actions/clientActions';
import { Select } from 'antd';

const { Option } = Select;

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

const clientSelect = (value) => {
}

const client_selector = (clients) => {
    return (
      <Select style={{ width: 120 }} onChange={clientSelect}>
        {clients.map((client,index) => (
          <Option value={client.id}>{client.name}</Option>
        ))}
      
      </Select>
    )
} 

class ContractForm extends Component {
    constructor(){
        super()
        this.state = {
            targetKeys: oriTargetKeys,
            selectedKeys: [],
            disabled: false,
          };
        
    }

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
        console.log('targetKeys: ', nextTargetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
      };
    

     handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
    
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
      };
    
     handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
      };

      componentDidMount(){
        if(this.props.clients.clients.length === 0){
          this.props.fetch_client_list()
        }
      }
    
    render(){
      console.log(this.props)
        const { targetKeys, selectedKeys } = this.state;
        return(
            <div>
              <Row type="flex" justify="center" align="top" style={{minHeight: "100vh"}}>
                  <Col xs={23} sm={14} md={12}> 
                  <Row>
                    <Col >
                       Clinet Name <br/>
                       {client_selector(this.props.clients.clients)}
                    </Col>
                    <Col >Total Employees</Col>
                </Row>
                <Row>
                    <Col> 
                      <div>
                          <Transfer
                          dataSource={mockData}
                          titles={['Source', 'Target']}
                          targetKeys={targetKeys}
                          selectedKeys={selectedKeys}
                          onChange={this.handleChange}
                          onSelectChange={this.handleSelectChange}
                          render={item => item.title}
                          />
                      </div>
                    </Col>
                </Row>
                  </Col>
              </Row>
            </div>
        )
    }
}

const mapStateToProps = () => (state) => {
  return{
    clients: state.clients
  }
   

}

const mapDispatchProps = (dispatch) => bindActionCreators({
  fetch_client_list: fetch_client_list
}, dispatch)


export default connect(mapStateToProps, mapDispatchProps)(ContractForm)