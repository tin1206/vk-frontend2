import React, {Component} from 'react';
import { Row, Col } from 'antd';
import { Transfer, Switch } from 'antd';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);




class ContractEdit extends Component {
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
    
    render(){
        const { targetKeys, selectedKeys, disabled } = this.state;
        return(
            <div>
                <Row>
                    <Col sm={12}>Clinet Name</Col>
                    <Col sm={12}>Total Employees</Col>
                </Row>
                <Row>
                    <Col sm={12}> 
                    <div>
                        <Transfer
                        dataSource={mockData}
                        titles={['Source', 'Target']}
                        targetKeys={targetKeys}
                        selectedKeys={selectedKeys}
                        onChange={this.handleChange}
                        onSelectChange={this.handleSelectChange}
                        render={item => item.title}
                        disabled={disabled}
                        />
                    </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContractEdit