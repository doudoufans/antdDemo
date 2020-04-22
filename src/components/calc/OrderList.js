import React from 'react';
import { Table,Form, Select,Input,Button,DatePicker,Modal,Divider} from 'antd';
import * as RecordsAPI from '../../utils/RecordsAPI';

const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 12 },
};

class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            visible: false,
            error: null,
            isLoaded: false,
            records: []
         };
    }

    componentDidMount() {
      RecordsAPI.getAll().then(
        response => this.setState({
          records: response.data,
          isLoaded: true
        })
      ).catch(
        error => this.setState({
          isLoaded: true,
          error
        })
      )
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    onChange=(date, dateString)=>{
      console.log(date, dateString);
    }

    accounting=()=>{
      // this.showModal();
    }
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      const {records} =this.state;
        const columns = [
            {
              title: '订单编号',
              dataIndex: 'orderNo',
              key: 'orderNo',
            },
            {
              title: '订单原始费用',
              dataIndex: 'orginFee',
              key: 'orginFee',
            },
            {
              title: '自垫费用',
              dataIndex: 'selfFee',
              key: 'selfFee',
            },
            {
              title: '动态折扣',
              dataIndex: 'dynamicDiscount',
              key: 'dynamicDiscount',
            },
            {
              title: '订单立减',
              dataIndex: 'destCutAmount',
              key: 'destCutAmount',
            },
            {
              title: '分润比例',
              dataIndex: 'splitRatio',
              key: 'splitRatio',
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                 {<Button type="primary" onClick={this.showModal}>
          司机
        </Button>}
          <Divider type="vertical" />
          { <Button type="primary" onClick={this.showModal}>
          财务
        </Button>}

                </span>
              ),
            },
          ];
        return (
            <div className='info'> 
            <Modal
              title="司机KPI对比结果"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p></p>
              <p></p>
              <p></p>
            </Modal>
             <Form className="cc-table-filter" key="form" layout="inline">
             <FormItem {...formItemLayout} label="环境">
            {getFieldDecorator('evn', {
              initialValue: '',
              rules: [],
            })(<Select placeholder="" style={{ width: 80 }}>
              <Option value="0">33</Option>
              <Option value="1">44</Option>
              <Option value="2">stable</Option>
            </Select>)}
          </FormItem>
             <FormItem {...formItemLayout} label="订单号：">
            {getFieldDecorator('mockName', {
              initialValue: '',
              rules: [],
            })(<Input className="input-md" maxLength="100" placeholder="请输入订单编号" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="乘客手机号">
            {getFieldDecorator('interfaceName', {
              initialValue: '',
              rules: [],
            })(<Input className="input-md" maxLength="100" placeholder="请输入乘客手机号" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="司机手机号">
            {getFieldDecorator('interfaceName', {
              initialValue: '',
              rules: [],
            })(<Input className="input-md" maxLength="100" placeholder="请输入司机手机号" />)}
          </FormItem>
          <FormItem {...formItemLayout} label="创建时间">
          <DatePicker onChange={this.onChange} maxLength="100"/>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => this.onSearch(1)}
            >
查询
            </Button>
          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
              onClick={this.onReset}
            >
重置
            </Button>
          </FormItem>
        </Form>
              <Table columns={columns} dataSource={records} />
            </div>
        );
    }
}
const WrappedAdvancedSearchForm = Form.create()(OrderList);
export default WrappedAdvancedSearchForm;
