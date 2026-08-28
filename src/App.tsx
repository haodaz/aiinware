import React, { useEffect, useState } from 'react';
import { Layout, Typography, Card, Row, Col, Tag, Space, Timeline, ConfigProvider, theme } from 'antd';
import { 
  SafetyOutlined, 
  ClusterOutlined, 
  CloudServerOutlined,
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
  HomeOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          fontFamily: 'Inter, sans-serif',
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Header 
          style={{ 
            position: 'fixed', 
            zIndex: 999, 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center',
            background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease',
            padding: '0 50px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src="./h3c-logo.png" alt="H3C" height="24" className={scrolled ? '' : 'logo-white'} />
            <span style={{ color: scrolled ? '#333' : '#888', fontSize: '20px' }}>×</span> 
            <img src="./pf-logo.png" alt="Square Create" height="28" className={scrolled ? '' : 'logo-white'} />
          </div>
        </Header>

        <Content>
          {/* Hero Section (Keep Dark for Impact) */}
          <section className="bg-hero" style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '64px',
            backgroundColor: 'rgba(5, 11, 20, 0.7)',
            backgroundBlendMode: 'overlay'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20%',
              left: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-20%',
              right: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }} />

            <div style={{ textAlign: 'center', zIndex: 1, maxWidth: '1000px', padding: '0 20px' }}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <Space direction="vertical" size="large">
                  <Tag color="blue" style={{ padding: '4px 12px', fontSize: '14px', borderRadius: '16px' }}>
                    战略合作愿景
                  </Tag>
                  <Title style={{ fontSize: '4.5rem', margin: 0, fontWeight: 800, lineHeight: 1.2 }}>
                    <span style={{ color: '#fff' }}>智算筑基，</span>
                    <span className="title-gradient">行业生慧</span>
                  </Title>
                  <Title level={2} style={{ color: '#888', fontWeight: 300, marginTop: 10 }}>
                    基于“教育-科技-人才”行业基础设施与能力，<br/>打造 <Text style={{ color: '#d4af37', fontWeight: 600, fontSize: '2.5rem', margin: '0 8px' }}>具脑硬件 + 具心算力</Text>
                  </Title>
                  <Paragraph style={{ fontSize: '1.2rem', color: '#bbb', maxWidth: '900px', margin: '32px auto 0 auto', lineHeight: 1.8 }}>
                    共同践行“科技求真、以人为本”理念。依托平方创想在教育、科技、人才领域的垂直数字基础设施与深厚行业 Know-how，深度赋能新华三算力底座，让硬件焕发业务生机。以真实的垂直切入价值，带动底层基础设施与服务的大规模部署，携手进入千行百业与千家万户。
                  </Paragraph>
                </Space>
              </motion.div>
            </div>
          </section>

          {/* Section 2: 具脑与具心 (Shared Staggered Layout) */}
          <section style={{ 
            minHeight: '100vh', 
            background: 'radial-gradient(circle at top left, #ffffff, #f2f7fc, #fafafa)',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '100px 24px',
            position: 'relative'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <Title level={2} style={{ color: '#0b1a30', fontSize: '3rem' }}>具脑与具心：打破同质化的全新战略</Title>
                <Paragraph style={{ color: '#555', fontSize: '1.2rem', margin: 0 }}>智能化时代真基建——以人为本，软硬兼济，赋能行业核心价值</Paragraph>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'flex-start' }}>
                
                {/* Top Left: Brain Text & Line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: '40px', paddingTop: '40px', zIndex: 2 }}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} viewport={{ once: true }}>
                    <Title level={2} style={{ color: '#333', fontSize: '2.5rem', margin: 0 }}>具脑硬件</Title>
                    <Paragraph style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, marginTop: '20px' }}>
                      让硬件搭载的AI更好、更垂直，更适合目前高风险、高利害的教育政务行业。
                      <br/>
                      深谙行业规则、聚焦行业“人”的要素，能够主动作出专业诊断、助力决策的“行业专家大脑”。
                    </Paragraph>
                  </motion.div>
                  <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} style={{ width: '1px', height: '100px', background: '#999', margin: '20px 0 0 20px', transformOrigin: 'bottom' }} />
                </div>
                
                {/* Top Right: Heart Image & Line */}
                <div style={{ display: 'flex', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                      <img src="./heart_compute_light.png" alt="Heart Compute" style={{ width: '100%', maxWidth: '350px', mixBlendMode: 'multiply' }} />
                    </motion.div>
                    <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} style={{ width: '1px', height: '100px', background: '#999', marginTop: '10px', alignSelf: 'flex-start', marginLeft: '60px', transformOrigin: 'top' }} />
                  </div>
                </div>

                {/* Bottom Left: Brain Image */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-150px', zIndex: 1 }}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <img src="./hardware_brain.png" alt="Hardware Brain" style={{ width: '100%', maxWidth: '550px' }} />
                  </motion.div>
                </div>
                
                {/* Bottom Right: Heart Text */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingLeft: '40px', marginTop: '-60px', zIndex: 2 }}>
                  <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} viewport={{ once: true }}>
                    <Title level={2} style={{ color: '#333', fontSize: '2.5rem', margin: 0 }}>具心算力</Title>
                    <Paragraph style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, marginTop: '20px' }}>
                      算力不应只是用来跑数据的计算器，而是有理解、有方向、有效率的生命体。在心脏加持下输送到有需要的组织，并形成循环供能。
                    </Paragraph>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
            display: 'flex', 
            alignItems: 'center', 
            padding: '80px 24px',
            position: 'relative'
          }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <Title style={{ color: '#0b1a30', fontSize: '4rem', margin: 0, fontWeight: 800 }}>具脑 + 具心 = 真正的以人为本</Title>
                
                <div style={{ marginTop: '60px', textAlign: 'left', background: 'rgba(255,255,255,0.6)', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(255,255,255,0.8)' }}>
                  <Paragraph style={{ color: '#444', fontSize: '1.4rem', lineHeight: 2, marginBottom: '40px', textIndent: '2em' }}>
                    当硬件具备了垂直深度的专业“大脑”（精准诊断、智慧决策），并拥有了能够长期记忆、持续共情的特质，它便建立了与人之间更深刻的链接。人与硬件的交集，不再局限于冰冷的物理空间，而是延伸至心智的认可、情感的伴随与愿景的协作。
                  </Paragraph>
                  
                  <Paragraph style={{ color: '#444', fontSize: '1.4rem', lineHeight: 2, margin: 0, textIndent: '2em' }}>
                    当算力拥有了“心脏”，它将不再是无差别消耗的资源，而是被智能精准调度的源泉。通过软件与平台的管线，算力紧密围绕人的核心需求，源源不断地转化为有价值的数据、知识与智能应用。它被那些与人最贴近的真实场景需求所驱动，而在平方创想数字基础设施的加持下，这种需求反馈更促成了算力价值的生生不息与闭环流转。
                  </Paragraph>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Value Prop Table (Light Theme) */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backgroundBlendMode: 'overlay' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>价值重塑：过去 VS 联合未来</Title>
                </div>
                
                <div style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e8e8e8', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                  <Row style={{ background: '#fafafa', padding: '20px', fontWeight: 'bold' }}>
                    <Col span={6} style={{ color: '#666' }}>核心维度</Col>
                    <Col span={9} style={{ color: '#666' }}>过去的传统硬件 (单打独斗)</Col>
                    <Col span={9} style={{ color: '#1890ff' }}>现在的联合方案 (新华三+平方)</Col>
                  </Row>
                  {[
                    ['产品属性', '泛用型IT基础设施，冷冰冰的工具', '以人为本的“具脑与具心”数字伴侣'],
                    ['客户价值', '提供基础算力与存储 (易被替代)', '直击业务痛点的决策能力 (极高粘性)'],
                    ['交互模式', '被动响应指令 (无记忆，形同初见)', '主动感知、长期记录 (越用越懂你)'],
                    ['销售话术', '“我们的服务器算力更强、更稳定”', '“这是为贵单位定制的教科人专属大脑”']
                  ].map((item, index) => (
                    <Row key={index} style={{ padding: '24px 20px', borderTop: '1px solid #f0f0f0' }}>
                      <Col span={6} style={{ color: '#333', fontWeight: 600 }}>{item[0]}</Col>
                      <Col span={9} style={{ color: '#888' }}>{item[1]}</Col>
                      <Col span={9} style={{ color: '#0b1a30', fontWeight: 600 }}>{item[2]}</Col>
                    </Row>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* NEW SECTION 1: 核心壁垒 —— 行业垂直基础设施与深度 Know-how */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(250, 251, 252, 0.9)', backgroundBlendMode: 'overlay' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>从“通用基座”到“垂直大脑”的价值飞跃</Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>基于平方创想教科人垂直基础设施与深度 Know-how，为硬件注入行业灵魂</Paragraph>
                </div>
              </motion.div>

              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} md={11}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Card bordered={false} style={{ background: '#fff', border: '1px solid #e8e8e8', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                      <Title level={4} style={{ color: '#888' }}>当前硬件落地的挑战</Title>
                      <Paragraph style={{ color: '#333', fontSize: '18px', fontWeight: 'bold' }}>
                        通用 AI 平台 + 客户自建行业知识库
                      </Paragraph>
                      <Paragraph style={{ color: '#666', lineHeight: 1.8 }}>
                        新华三等头部厂商为客户提供了极致的算力底座和通用 AI 使能平台。然而，在教育、政务等高度严谨的领域，客户往往面临“无米之炊”的困境：缺乏高质量的结构化数据，更缺乏将政策导向转化为算法逻辑的团队。
                        <br/><br/>
                        <Text type="danger" strong>痛点：算力虽强，但因为缺少行业 Know-how 的支撑，难以真正深入客户的核心业务流。</Text>
                      </Paragraph>
                    </Card>
                  </motion.div>
                </Col>
                
                <Col xs={24} md={2} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#ccc', fontSize: '24px', fontWeight: 'bold', fontStyle: 'italic' }}>VS</div>
                </Col>

                <Col xs={24} md={11}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                    <Card bordered={false} style={{ background: '#fffcf5', border: '1px solid #faad14', boxShadow: '0 10px 30px rgba(250, 173, 20, 0.1)' }}>
                      <Title level={4} style={{ color: '#d4af37' }}>平方创想的“交钥匙”方案</Title>
                      <Paragraph style={{ color: '#333', fontSize: '18px', fontWeight: 'bold' }}>
                        垂直基础设施 + 领域 Know-how + 专精模型
                      </Paragraph>
                      <Paragraph style={{ color: '#666', lineHeight: 1.8 }}>
                        我们将平方创想深耕十余年的<Text strong style={{ color: '#d4af37' }}>教育、科技、人才数据图谱</Text>，以及完全成熟的垂直模型应用（如“一答”、“知己”），作为标准“数字大脑”预装进算力一体机中。
                        <br/><br/>
                        <Text strong style={{ color: '#d4af37' }}>优势：提供海量的高价值优质行业数据与即插即用的专家模型，让算力设备出厂即具备国家级的行业智力标准。</Text>
                      </Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </section>

          {/* NEW SECTION 2: 全矩阵硬件赋能 */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backgroundBlendMode: 'overlay', borderTop: '1px solid #f0f0f0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>全矩阵软硬协同</Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>当算力底座遇见“具脑与具心”，重塑全线物理产品的商业价值</Paragraph>
                </div>
              </motion.div>

              <Row gutter={[32, 32]}>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Card bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #e8e8e8' }}>
                      <div style={{ padding: '4px 12px', background: '#f5f5f5', borderRadius: '4px', marginBottom: '20px', display: 'inline-block' }}>
                        <Text strong style={{ color: '#555', fontSize: '12px' }}>个人 / 科室级节点</Text>
                      </div>
                      <Title level={4}>MegaCube 桌面工作站</Title>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>硬件载体：</Text> H3C LinSeer MegaCube、边缘计算节点、商用PC。<br/><br/>
                        <Text strong style={{ color: '#333' }}>联合形态：</Text> 搭载平方创想<Text style={{color:'#1890ff', fontWeight: 600}}>“知己”</Text>伴随模型。使这台设备不再是普通的办公电脑，而是领导桌面上的专属私密智库、家庭里的升学管家，提供长期的陪伴与记忆（具心）。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                    <Card bordered={false} style={{ height: '100%', background: '#fff', border: '2px solid #1890ff', boxShadow: '0 8px 24px rgba(24,144,255,0.1)' }}>
                      <div style={{ padding: '4px 12px', background: '#e6f7ff', borderRadius: '4px', marginBottom: '20px', display: 'inline-block' }}>
                        <Text strong style={{ color: '#1890ff', fontSize: '12px' }}>院系 / 中小政企 (重点主推)</Text>
                      </div>
                      <Title level={4}>LinSeer Cube 一体机</Title>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>硬件载体：</Text> H3C LinSeer Cube 大模型一体机。<br/><br/>
                        <Text strong style={{ color: '#333' }}>联合形态：</Text> 预装平方创想<Text style={{color:'#1890ff', fontWeight: 600}}>“一答”</Text>院校治理大脑。插电即享部委级验证的数据底座，结合新华三的主动安全方案，确保核心数据不出域，实现“开箱即用的智慧校务”（具脑）。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }}>
                    <Card bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #e8e8e8' }}>
                      <div style={{ padding: '4px 12px', background: '#f5f5f5', borderRadius: '4px', marginBottom: '20px', display: 'inline-block' }}>
                        <Text strong style={{ color: '#555', fontSize: '12px' }}>省市级政务云 / 标杆</Text>
                      </div>
                      <Title level={4}>大型智算基座</Title>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>硬件载体：</Text> H3C 智算集群、分布式智慧存储、智算网络 (全光网络5.0)。<br/><br/>
                        <Text strong style={{ color: '#333' }}>联合形态：</Text> 充当区域级人才/科技大模型中枢。借助平方的宏观决策模型，支撑亿级数据高吞吐流转，打造城市级的产教融合算力网。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
              </Row>
            </div>
          </section>

          {/* Sales Engine (Light Theme) */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(245, 247, 250, 0.9)', backgroundBlendMode: 'overlay' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>商业变现矩阵：以软带硬的大单引擎</Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>以AI概念与业务价值切入，带动大规模硬件基础设施采购</Paragraph>
                </div>
              </motion.div>

              <Row gutter={[32, 32]}>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #e6f7ff', boxShadow: '0 8px 24px rgba(24,144,255,0.05)' }}>
                      <CloudServerOutlined style={{ fontSize: '40px', color: '#1890ff', marginBottom: '24px' }} />
                      <Title level={4}>大型项目：算力与数据私有云</Title>
                      <Tag color="volcano" style={{ marginBottom: '16px' }}>高客单价 / 标杆客户</Tag>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>针对：</Text> 省市教育局、双一流高校、大型科研院所。<br/><br/>
                        <Text strong style={{ color: '#333' }}>方案：</Text> 平方提供全套垂直大模型及区域数据平台。带动新华三<Text style={{color:'#1890ff'}}>大型GPU集群、高性能存储</Text>的大规模部署。<br/><br/>
                        <Text strong style={{ color: '#333' }}>卖点：</Text> 最高级别的安全合规，一单拉动极高硬件销售额。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                    <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #f6ffed', boxShadow: '0 8px 24px rgba(82,196,26,0.05)' }}>
                      <AppstoreOutlined style={{ fontSize: '40px', color: '#52c41a', marginBottom: '24px' }} />
                      <Title level={4}>中小项目：场景化AI一体机</Title>
                      <Tag color="green" style={{ marginBottom: '16px' }}>开箱即用 / 快速走量</Tag>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>针对：</Text> 普通本专科院校、单一院系、中小型政企。<br/><br/>
                        <Text strong style={{ color: '#333' }}>方案：</Text> 预装“一答”治理模型、“知己”升学模型的<Text style={{color:'#52c41a'}}>新华三灵犀系列大模型一体机</Text>。<br/><br/>
                        <Text strong style={{ color: '#333' }}>卖点：</Text> 软硬出厂预装，插电即用。对下沉市场极具杀伤力，以轻量化硬件打包走量。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
                <Col xs={24} lg={8}>
                   <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }}>
                    <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #f9f0ff', boxShadow: '0 8px 24px rgba(114,46,209,0.05)' }}>
                      <ClusterOutlined style={{ fontSize: '40px', color: '#722ed1', marginBottom: '24px' }} />
                      <Title level={4}>衍生拉动：全栈网络升级效应</Title>
                      <Tag color="purple" style={{ marginBottom: '16px' }}>生态协同 / 连带销售</Tag>
                      <Paragraph style={{ color: '#555' }}>
                        <Text strong style={{ color: '#333' }}>针对：</Text> 具有校园网改造、办公数字化的潜在客户。<br/><br/>
                        <Text strong style={{ color: '#333' }}>方案：</Text> 借由“AI升级”契机，将新华三的<Text style={{color:'#722ed1'}}>Wi-Fi 7、核心交换机、安全网关</Text>顺势打包。<br/><br/>
                        <Text strong style={{ color: '#333' }}>卖点：</Text> 以AI大脑为钩子，实现从单点算力到全栈网络基础设施的全面替换。
                      </Paragraph>
                    </Card>
                   </motion.div>
                </Col>
              </Row>
            </div>
          </section>

          {/* Use Cases (Light Theme) */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backgroundBlendMode: 'overlay' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>四大标杆落地场景</Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>将“具脑与具心”理念落地到真实购买力强的应用领域</Paragraph>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <Timeline
                  mode="alternate"
                  items={[
                    {
                      color: '#1890ff',
                      dot: <BankOutlined style={{ fontSize: '24px', background: '#fff', padding: '4px' }} />,
                      children: (
                        <Card className="glass-card" bordered={false} style={{ textAlign: 'left', marginBottom: '20px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                          <Title level={4} style={{ color: '#1890ff', marginTop: 0 }}>政务场景：区域科技人才数字大脑</Title>
                          <Paragraph style={{ color: '#555' }}>
                            <Text strong style={{ color: '#333' }}>硬件底座：</Text> 新华三政务私有云与算力节点<br/>
                            <Text strong style={{ color: '#333' }}>软件大脑：</Text> 平方创想人才知识图谱与宏观决策模型<br/>
                            <Text strong style={{ color: '#333' }}>价值展现：</Text> 帮助区域人才局精准盘点辖区人才，进行产业政策和招商引资的“具脑”智能决策。
                          </Paragraph>
                        </Card>
                      ),
                    },
                    {
                      color: '#d4af37',
                      dot: <TeamOutlined style={{ fontSize: '24px', background: '#fff', padding: '4px', color: '#d4af37' }} />,
                      children: (
                        <Card className="glass-card" bordered={false} style={{ textAlign: 'left', marginBottom: '20px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                          <Title level={4} style={{ color: '#d4af37', marginTop: 0 }}>大型企业：企业级数字内生导师</Title>
                          <Paragraph style={{ color: '#555' }}>
                            <Text strong style={{ color: '#333' }}>硬件底座：</Text> 新华三灵犀智算一体机<br/>
                            <Text strong style={{ color: '#333' }}>软件大脑：</Text> 平方职业发展模型与技能图谱<br/>
                            <Text strong style={{ color: '#333' }}>价值展现：</Text> 为央国企/500强员工提供带有长线记忆（具心）的职业技能培训和晋升规划，提升组织人才密度。
                          </Paragraph>
                        </Card>
                      ),
                    },
                    {
                      color: '#1890ff',
                      dot: <SafetyOutlined style={{ fontSize: '24px', background: '#fff', padding: '4px' }} />,
                      children: (
                        <Card className="glass-card" bordered={false} style={{ textAlign: 'left', marginBottom: '20px', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                          <Title level={4} style={{ color: '#1890ff', marginTop: 0 }}>院校场景：校级一网通办与数字辅导员</Title>
                          <Paragraph style={{ color: '#555' }}>
                            <Text strong style={{ color: '#333' }}>硬件底座：</Text> 新华三智慧校园网络与边缘服务器<br/>
                            <Text strong style={{ color: '#333' }}>软件大脑：</Text> 平方创想“一答”智能体<br/>
                            <Text strong style={{ color: '#333' }}>价值展现：</Text> 部署在校园各处的终端，真正成为懂学生选课、心理、就业的“具心”校园辅导员，而非冰冷的查询机。
                          </Paragraph>
                        </Card>
                      ),
                    },
                    {
                      color: '#d4af37',
                      dot: <HomeOutlined style={{ fontSize: '24px', background: '#fff', padding: '4px', color: '#d4af37' }} />,
                      children: (
                        <Card className="glass-card" bordered={false} style={{ textAlign: 'left', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                          <Title level={4} style={{ color: '#d4af37', marginTop: 0 }}>个人家庭：知己家庭AI专属终端</Title>
                          <Paragraph style={{ color: '#555' }}>
                            <Text strong style={{ color: '#333' }}>硬件底座：</Text> 新华三家用智能路由器/智能带屏终端<br/>
                            <Text strong style={{ color: '#333' }}>软件大脑：</Text> 平方创想“知己”升学陪伴模型<br/>
                            <Text strong style={{ color: '#333' }}>价值展现：</Text> 成为伴随孩子从小升初到高考规划的专属教育管家，以极其亲民的方式让高端算力进入千家万户。
                          </Paragraph>
                        </Card>
                      ),
                    }
                  ]}
                />
              </motion.div>
            </div>
          </section>

          {/* Bonding Section (Let Hardware Connect with People) */}
          <section className="section-padding bg-light-pattern" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backgroundBlendMode: 'overlay', borderBottom: '1px solid #e8e8e8' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <ClusterOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '24px' }} />
                <Title level={2} style={{ color: '#0b1a30', margin: 0 }}>让硬件与算力，与“人”产生更多可能</Title>
                <Paragraph style={{ color: '#555', fontSize: '18px', lineHeight: 1.8, marginTop: '30px', textAlign: 'justify', textIndent: '2em' }}>
                  基于平方创想独有的<Text strong style={{ color: '#1890ff' }}>“认知图谱（Learning Graph）”</Text>与长周期伴随记忆，硬件终端将不再是每次开机都要“重置”的冰冷工具，而是能懂人、记忆人、陪伴人成长的“知心伙伴”。
                </Paragraph>
                <Paragraph style={{ color: '#555', fontSize: '18px', lineHeight: 1.8, textAlign: 'justify', textIndent: '2em' }}>
                  这种智能的注入，将创造更高频次的人机交互。借着与硬件中智能的深度 Bonding，用户将获得与硬件本身的品牌 Bonding。他们建立起的不仅是对机器专业性的认可，对底层安全数据的信任，更是对新华三数字基础设施难以割舍的使用粘性。
                </Paragraph>
              </motion.div>
            </div>
          </section>

          {/* About Square Create */}
          <section className="section-padding" style={{ background: '#0b1a30', color: '#fff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#fff' }}>走进 平方创想</Title>
                  <Paragraph style={{ color: '#a0c4ff', fontSize: '16px' }}>构建“教育、科技、人才”一体化领域的全景“可信任”基础设施</Paragraph>
                </div>
              </motion.div>

              <Row gutter={[48, 48]}>
                <Col xs={24} md={12}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                    <Card bordered={false} style={{ height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                      <Title level={4} style={{ color: '#1890ff', marginBottom: '24px' }}>平方的能力与核心身位</Title>
                      <ul style={{ color: '#ddd', fontSize: '15px', lineHeight: 2.2, paddingLeft: '20px', margin: 0 }}>
                        <li><Text strong style={{ color: '#fff' }}>十年行业深耕：</Text>拥有涵盖国内外顶级学术与产业资源的数据积累，构建了教育-科技-人才图谱（Learning Graph & Knowledge Graph），是该垂直领域的绝对头部。</li>
                        <li><Text strong style={{ color: '#fff' }}>可信任的数据底座：</Text>数据源权威可靠，技术架构通过国家最高教育行政部门验证，深度服务众多“双一流”高校及顶尖科研院所。</li>
                        <li><Text strong style={{ color: '#fff' }}>全场景 AI 智能体矩阵：</Text>自主研发“知己”（个人升学）、“一答”（院校治理）、“小北”（机构赋能）等多级模型应用，已累计服务超 600 万高端人才与上千家行业机构。</li>
                      </ul>
                    </Card>
                  </motion.div>
                </Col>
                <Col xs={24} md={12}>
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                    <Card bordered={false} style={{ height: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px' }}>
                      <Title level={4} style={{ color: '#d4af37', marginBottom: '24px' }}>科技求真的发展愿景</Title>
                      <Paragraph style={{ color: '#ddd', fontSize: '16px', lineHeight: 1.9 }}>
                        平方创想始终坚守<Text strong style={{ color: '#d4af37', fontSize: '16px' }}>“科技求真，以人为本”</Text>的初心。
                        <br/><br/>
                        在人工智能爆发的时代，我们认为世上最宝贵的投资是<Text strong style={{ color: '#fff' }}>“投资于人”</Text>。我们致力于用真实、专业、可信任的底层数据与智能算法，剔除信息噪音，还原每个人和每个机构的真实价值。
                        <br/><br/>
                        通过打造这种可信任的数字基础设施，我们希望让每一次学业规划、每一项科研探索、每一次职业抉择，都充满严谨的智慧与深厚的温度。
                      </Paragraph>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </section>
        </Content>

        <Footer style={{ textAlign: 'center', background: '#050b14', color: '#666', padding: '40px 20px', borderTop: '1px solid #1a1a1a' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <img src="./h3c-logo.png" alt="H3C" height="24" className="logo-white" />
            <span style={{ color: '#666', fontSize: '20px' }}>×</span> 
            <img src="./pf-logo.png" alt="Square Create" height="28" className="logo-white" />
          </div>
          <Text style={{ color: '#555' }}>打造以人为本的新一代基础设施 | 商业合作内部演示版 v3.0</Text>
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
