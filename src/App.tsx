import React, { useEffect, useState } from 'react';
import { Layout, Typography, Card, Row, Col, Tag, Space, ConfigProvider, theme } from 'antd';
import { 
  ClusterOutlined, 
  CloudServerOutlined,
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
  HomeOutlined,
  DatabaseOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  SafetyCertificateOutlined,
  ShareAltOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './index.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'brain' | 'heart'>('brain');
  const [activeScenarioTab, setActiveScenarioTab] = useState<'tog' | 'tos' | 'tob' | 'toc'>('tog');

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

          {/* SYSTEMATIC VALUE SECTION */}
          <div style={{ position: 'relative', background: '#fafafa' }}>
            {/* Sticky Tabs */}
            <div style={{ 
              position: 'sticky', 
              top: 64, // below the main header
              zIndex: 100, 
              background: 'rgba(250, 250, 250, 0.85)', 
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid #e8e8e8',
              display: 'flex',
              justifyContent: 'center',
              padding: '20px 0'
            }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <a 
                  href="#value-brain"
                  onClick={(e) => { e.preventDefault(); document.getElementById('value-brain')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ 
                    padding: '8px 24px', 
                    borderRadius: '30px', 
                    fontWeight: 600, 
                    fontSize: '16px',
                    color: activeSection === 'brain' ? '#fff' : '#666',
                    background: activeSection === 'brain' ? '#0b1a30' : 'transparent',
                    border: `1px solid ${activeSection === 'brain' ? '#0b1a30' : '#d9d9d9'}`,
                    transition: 'all 0.3s'
                  }}
                >
                  具脑硬件
                </a>
                <a 
                  href="#value-heart"
                  onClick={(e) => { e.preventDefault(); document.getElementById('value-heart')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ 
                    padding: '8px 24px', 
                    borderRadius: '30px', 
                    fontWeight: 600, 
                    fontSize: '16px',
                    color: activeSection === 'heart' ? '#fff' : '#666',
                    background: activeSection === 'heart' ? '#d4af37' : 'transparent',
                    border: `1px solid ${activeSection === 'heart' ? '#d4af37' : '#d9d9d9'}`,
                    transition: 'all 0.3s'
                  }}
                >
                  具心算力
                </a>
              </div>
            </div>

            {/* SCREEN 1: 具脑硬件 */}
            <motion.section 
              id="value-brain"
              onViewportEnter={() => setActiveSection('brain')}
              viewport={{ amount: 0.5 }}
              style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px', position: 'relative' }}
            >
              <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                  <Title level={4} style={{ color: '#0b1a30', fontWeight: 'bold' }}>具脑硬件</Title>
                  <Title level={2} style={{ color: '#333', fontSize: '2.5rem', marginTop: 10 }}>从“通用基座”到“垂直大脑”的价值飞跃</Title>
                  <Paragraph style={{ color: '#666', fontSize: '1.2rem', marginTop: 20 }}>为硬件注入行业灵魂，解决通用 AI 无法深入核心业务流的痛点</Paragraph>
                </div>

                <Row gutter={[64, 64]} align="middle">
                  <Col xs={24} md={12}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                      <Card bordered={false} style={{ background: '#fff', border: '1px solid #e8e8e8', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', borderRadius: '16px', padding: '20px' }}>
                        <Title level={4} style={{ color: '#888' }}>当前硬件落地的挑战</Title>
                        <Paragraph style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
                          通用 AI 平台 + 客户自建行业知识库
                        </Paragraph>
                        <Paragraph style={{ color: '#666', lineHeight: 2, fontSize: '16px', marginTop: '20px' }}>
                          新华三等头部厂商为客户提供了极致的算力底座和通用 AI 使能平台。然而，在教育、政务等高度严谨的领域，客户往往面临“无米之炊”的困境：缺乏高质量的结构化数据，更缺乏将政策导向转化为算法逻辑的团队。
                          <br/><br/>
                          <Text type="danger" strong>痛点：算力虽强，但因为缺少行业 Know-how 的支撑，难以真正深入客户的核心业务流。</Text>
                        </Paragraph>
                      </Card>
                    </motion.div>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
                      <Card bordered={false} style={{ background: '#fffcf5', border: '1px solid #faad14', boxShadow: '0 20px 50px rgba(250, 173, 20, 0.1)', borderRadius: '16px', padding: '20px' }}>
                        <Title level={4} style={{ color: '#d4af37' }}>平方创想的“交钥匙”方案</Title>
                        <Paragraph style={{ color: '#333', fontSize: '18px', fontWeight: 'bold', marginTop: '20px' }}>
                          垂直基础设施 + 领域 Know-how + 专精模型
                        </Paragraph>
                        <Paragraph style={{ color: '#666', lineHeight: 2, fontSize: '16px', marginTop: '20px' }}>
                          我们将平方创想深耕十余年的<Text strong style={{ color: '#d4af37' }}>教育、科技、人才数据图谱</Text>，以及完全成熟的垂直模型应用，作为标准“数字大脑”预装进算力一体机中。
                          <br/><br/>
                          <Text strong style={{ color: '#d4af37' }}>优势：提供海量的高价值优质行业数据与即插即用的专家模型，让算力设备出厂即具备国家级的行业智力标准。</Text>
                        </Paragraph>
                      </Card>
                    </motion.div>
                  </Col>
                </Row>

                {/* Brain Module 2: 可信任大脑 */}
                <div style={{ marginTop: '100px', borderTop: '1px solid #e8e8e8', paddingTop: '80px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Title level={2} style={{ color: '#333', fontSize: '2rem' }}>给硬件一个“可信任”的大脑</Title>
                    <Paragraph style={{ color: '#666', fontSize: '1.2rem', marginTop: 10 }}>在高容错、高责任的领域，我们需要“可信任”的智慧大脑。</Paragraph>
                  </div>
                  
                  <Row gutter={[32, 32]} align="stretch">
                    <Col xs={24} md={8}>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ height: '100%' }}>
                        <Card bordered={false} style={{ background: '#f0f5ff', border: '1px solid #adc6ff', borderRadius: '16px', height: '100%' }}>
                          <DatabaseOutlined style={{ fontSize: '32px', color: '#1890ff', marginBottom: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30' }}>“可信任”基础设施</Title>
                          <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                            依托平方创想建成的全球最大教育科技人才垂直领域知识中心，形成<Text strong style={{ color: '#1890ff' }}>真实可用知识 (True Knowledge)</Text> 与 <Text strong style={{ color: '#1890ff' }}>真实可信数据 (True Data)</Text>。为底层模型提供绝对可信的训练底座。
                          </Paragraph>
                        </Card>
                      </motion.div>
                    </Col>
                    <Col xs={24} md={8}>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} style={{ height: '100%' }}>
                        <Card bordered={false} style={{ background: '#fffcf5', border: '1px solid #faad14', borderRadius: '16px', height: '100%' }}>
                          <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#d4af37', marginBottom: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30' }}>“数据+知识”双驱动</Title>
                          <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                            打破一刀切的通用模型方案。通用大模型提供基础感知，而垂直大模型将<Text strong style={{ color: '#d4af37' }}>专家规则、因果逻辑与经验固化为知识模块</Text>，保证在极低容错率场景下的高精度与可追溯性。
                          </Paragraph>
                        </Card>
                      </motion.div>
                    </Col>
                    <Col xs={24} md={8}>
                      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} style={{ height: '100%' }}>
                        <Card bordered={false} style={{ background: '#fff0f6', border: '1px solid #ffadd2', borderRadius: '16px', height: '100%' }}>
                          <ShareAltOutlined style={{ fontSize: '32px', color: '#eb2f96', marginBottom: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30' }}>“知己知彼”场景赋能</Title>
                          <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                            基于可信任基座，实现全场景赋能。向内帮助组织<Text strong style={{ color: '#eb2f96' }}>“知己”</Text>（风险防御、底线保证）；向外帮助组织<Text strong style={{ color: '#eb2f96' }}>“知彼”</Text>（评估规划、科研产学研、价值挖掘），支撑高利害行业的智能决策。
                          </Paragraph>
                        </Card>
                      </motion.div>
                    </Col>
                  </Row>
                </div>
              </div>
            </motion.section>

            {/* SCREEN 2: 具心算力 */}
            <motion.section 
              id="value-heart"
              onViewportEnter={() => setActiveSection('heart')}
              viewport={{ amount: 0.3 }}
              style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px', background: '#fff', position: 'relative' }}
            >
              <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                  <Title level={4} style={{ color: '#d4af37', fontWeight: 'bold' }}>具心算力</Title>
                </div>

                {/* Heart Module 1: 消耗品 vs 资产投资 */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                  <Title level={2} style={{ color: '#333', fontSize: '2rem' }}>实现算力的资产化飞轮：从“一次性消耗”到“数字资产沉淀”</Title>
                  <Paragraph style={{ color: '#666', fontSize: '1.2rem', marginTop: 10 }}>每一次算力调用，都在为知识库持续“加厚”，让系统越用越聪明</Paragraph>
                </div>

                <Row gutter={[64, 64]} align="stretch">
                  <Col xs={24} md={12}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ height: '100%' }}>
                      <Card bordered={false} style={{ background: '#f9f9f9', border: '1px solid #eee', boxShadow: 'none', borderRadius: '16px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Title level={4} style={{ color: '#888' }}>传统通用 AI 模式下的算力</Title>
                        <Title level={2} style={{ color: '#333', fontSize: '28px', margin: '20px 0' }}>算力是“消耗品”</Title>
                        <Paragraph style={{ color: '#666', lineHeight: 2, fontSize: '16px', flexGrow: 1, marginTop: '10px' }}>
                          在纯通用大模型场景下，算力被用于处理单次查询。回答结束后，随着对话窗口的关闭，辛苦消耗 Token 检索来的高价值数据就随之<Text strong type="danger">消亡</Text>。
                          <br/><br/>
                          下次面临同样的查询，硬件设备只能重新消耗算力从零开始。在这种模式下，Token 与算力仅仅是一次性的消耗品，无法产生复利。
                        </Paragraph>
                      </Card>
                    </motion.div>
                  </Col>
                  
                  <Col xs={24} md={12}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} style={{ height: '100%' }}>
                      <Card bordered={false} style={{ background: '#f4f8fe', border: '1px solid #adc6ff', boxShadow: '0 20px 50px rgba(24, 144, 255, 0.08)', borderRadius: '16px', padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Title level={4} style={{ color: '#1890ff' }}>平方创想加持下的新华三算力</Title>
                        <Title level={2} style={{ color: '#0b1a30', fontSize: '28px', margin: '20px 0' }}>算力是“资产投资”</Title>
                        <Paragraph style={{ color: '#444', lineHeight: 2, fontSize: '16px', flexGrow: 1, marginTop: '10px' }}>
                          依托平方创想独特的<Text strong style={{ color: '#1890ff' }}>数据飞轮架构</Text>，算力每一次被业务终端的真实需求所驱动，所产生的高价值数据都将被系统“零额外成本”地捕获、去重、合并与沉淀。
                          <br/><br/>
                          同一个目标被查询越多次，设备内的知识库就越丰满。每一分钱的算力支出，都在转化为高纯度的数字资产，让系统<Text strong style={{ color: '#1890ff' }}>越用越快、越用越准、越用越聪明</Text>。
                        </Paragraph>
                      </Card>
                    </motion.div>
                  </Col>
                </Row>

                {/* Heart Module 2: 算力循环机制 */}
                <div style={{ marginTop: '100px', borderTop: '1px solid #e8e8e8', paddingTop: '80px' }}>
                  <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <Title level={2} style={{ color: '#333', fontSize: '2rem' }}>打破单向消耗，形成以心为枢纽的算力循环</Title>
                    <Paragraph style={{ color: '#666', fontSize: '1.2rem', marginTop: 10 }}>基于应用与硬件支持各系统，具心算力如何产生复利价值</Paragraph>
                  </div>
                  
                  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <Paragraph style={{ color: '#555', lineHeight: 2, fontSize: '16px', textAlign: 'center', marginBottom: '40px' }}>
                      算力<Text strong style={{ color: '#1890ff' }}>“出去”</Text>时，能够基于深刻的行业理解，精准高效地调度资源支持系统运行；<br/>
                      算力<Text strong style={{ color: '#52c41a' }}>“回来”</Text>时，能够用好带回来的东西，所采集的高价值数据将被捕获与沉淀，持续赋能下一轮计算。
                    </Paragraph>

                    {/* Fancy Animated Circulation Chart */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px 40px', background: 'linear-gradient(135deg, #f0f7ff 0%, #ffffff 50%, #f6ffed 100%)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.8)', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.05), inset 0 0 40px rgba(255,255,255,0.5)', position: 'relative', overflow: 'hidden' }}>
                      {/* Decorative background glows */}
                      <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(24,144,255,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
                      <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(82,196,26,0.15) 0%, transparent 70%)', borderRadius: '50%' }} />
                      
                      {/* Left Node: Data Hub */}
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.85)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(24, 144, 255, 0.3)',
                        boxShadow: '0 12px 32px rgba(24, 144, 255, 0.1)',
                        borderRadius: '20px',
                        padding: '30px 20px',
                        width: '180px',
                        textAlign: 'center',
                        zIndex: 2,
                        position: 'relative'
                      }}>
                        <DatabaseOutlined style={{ fontSize: '48px', color: '#1890ff', filter: 'drop-shadow(0 4px 12px rgba(24,144,255,0.3))', marginBottom: '16px' }} />
                        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#0b1a30', lineHeight: 1.6 }}>
                          新华三算力中枢<br/>
                          <span style={{ color: '#1890ff', fontSize: '18px', fontWeight: '900', margin: '4px 0', display: 'inline-block' }}>×</span><br/>
                          平方基础设施
                        </div>
                      </div>
                      
                      {/* Middle Connectors */}
                      <div style={{ flexGrow: 1, position: 'relative', height: '200px', margin: '0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        {/* Top Arrow: Compute Out */}
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <span style={{ fontSize: '14px', color: '#1890ff', fontWeight: 600, marginBottom: '12px', letterSpacing: '1px' }}>算力出去：高效支持系统</span>
                          <div style={{ width: '100%', height: '4px', background: 'rgba(24,144,255,0.1)', position: 'relative', borderRadius: '2px', overflow: 'hidden' }}>
                            <motion.div 
                              initial={{ x: '-100%' }}
                              animate={{ x: '100%' }}
                              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                              style={{ width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, #1890ff, #40a9ff, transparent)', position: 'absolute', left: 0 }}
                            />
                          </div>
                          <ArrowRightOutlined style={{ position: 'absolute', right: '-10px', color: '#1890ff', top: '32px', fontSize: '18px' }} />
                        </div>
                        
                        {/* Bottom Arrow: Data In */}
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <ArrowLeftOutlined style={{ position: 'absolute', left: '-10px', color: '#52c41a', top: '-14px', fontSize: '18px' }} />
                          <div style={{ width: '100%', height: '4px', background: 'rgba(82,196,26,0.1)', position: 'relative', borderRadius: '2px', overflow: 'hidden', marginBottom: '12px' }}>
                            <motion.div 
                              initial={{ x: '100%' }}
                              animate={{ x: '-100%' }}
                              transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 0.5 }}
                              style={{ width: '50%', height: '100%', background: 'linear-gradient(270deg, transparent, #52c41a, #73d13d, transparent)', position: 'absolute', left: 0 }}
                            />
                          </div>
                          <span style={{ fontSize: '14px', color: '#52c41a', fontWeight: 600, letterSpacing: '1px' }}>数据回来：用好高价值数据</span>
                        </div>
                      </div>
                      
                      {/* Right Nodes: Terminals */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 2, width: '240px' }}>
                        {/* Large Node */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.95)',
                          border: '1px solid rgba(114, 46, 209, 0.3)',
                          boxShadow: '0 8px 24px rgba(114, 46, 209, 0.08)',
                          borderRadius: '16px',
                          padding: '16px 20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          transform: 'translateX(-20px)',
                          transition: 'all 0.3s'
                        }}>
                          <AppstoreOutlined style={{ fontSize: '26px', color: '#722ed1' }} />
                          <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#0b1a30' }}>硬件+软件+AI集成终端</div>
                        </div>

                        {/* Medium Node */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid rgba(235, 47, 150, 0.3)',
                          boxShadow: '0 6px 16px rgba(235, 47, 150, 0.06)',
                          borderRadius: '12px',
                          padding: '12px 16px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}>
                          <CloudServerOutlined style={{ fontSize: '22px', color: '#eb2f96' }} />
                          <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>云端部署软件+AI</div>
                        </div>

                        {/* Small Node */}
                        <div style={{
                          background: 'rgba(255, 255, 255, 0.85)',
                          border: '1px solid rgba(82, 196, 26, 0.3)',
                          boxShadow: '0 4px 12px rgba(82, 196, 26, 0.04)',
                          borderRadius: '10px',
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          transform: 'translateX(20px)',
                        }}>
                          <ClusterOutlined style={{ fontSize: '18px', color: '#52c41a' }} />
                          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#555' }}>智能体产品</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>


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
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <Title level={2} style={{ color: '#0b1a30' }}>核心场景列举：赋能千行百业</Title>
                  <Paragraph style={{ color: '#666', fontSize: '16px' }}>将“具脑与具心”理念落地到真实购买力强、容错率低的专业应用领域</Paragraph>
                </div>
              </motion.div>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <div style={{ display: 'flex', background: '#f5f5f5', padding: '6px', borderRadius: '40px', gap: '8px' }}>
                  {(['tog', 'tos', 'tob', 'toc'] as const).map(tab => {
                    const isActive = activeScenarioTab === tab;
                    let label = '';
                    switch (tab) {
                      case 'tog': label = '政府 ToG'; break;
                      case 'tos': label = '到校 ToS'; break;
                      case 'tob': label = '到企 ToB'; break;
                      case 'toc': label = '个人家庭'; break;
                    }
                    return (
                      <div
                        key={tab}
                        onClick={() => setActiveScenarioTab(tab)}
                        style={{
                          padding: '10px 24px',
                          borderRadius: '30px',
                          cursor: 'pointer',
                          fontWeight: isActive ? 'bold' : 'normal',
                          color: isActive ? '#fff' : '#666',
                          background: isActive ? '#1890ff' : 'transparent',
                          transition: 'all 0.3s ease',
                          boxShadow: isActive ? '0 4px 12px rgba(24,144,255,0.3)' : 'none'
                        }}
                      >
                        {label}
                      </div>
                    );
                  })}
                </div>
              </div>

              <motion.div
                key={activeScenarioTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {activeScenarioTab === 'tog' && (
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #e6f7ff', boxShadow: '0 8px 24px rgba(24,144,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <BankOutlined style={{ fontSize: '28px', color: '#1890ff', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>区域人才大脑</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                          帮助区域人才局精准盘点辖区人才，进行产业政策和招商引资的“具脑”智能决策。<br/><br/>
                          <Text strong style={{ color: '#1890ff' }}>核心价值：人才检验与数据真实性</Text><br/>
                          政务决策容错率极低，仅仅拥有生成式的“幻觉”大模型是不可用的。基于平方底座真实可信的数据进行人才盘点和产业分析，确保每一条履历都能被精准检验，是算力转化为政绩的核心。
                        </Paragraph>
                      </Card>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #e6f7ff', boxShadow: '0 8px 24px rgba(24,144,255,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <ShareAltOutlined style={{ fontSize: '28px', color: '#1890ff', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>产学研转化平台</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                          打破高校科研成果与地方产业升级之间的信息壁垒，实现“精准对接”。<br/><br/>
                          <Text strong style={{ color: '#1890ff' }}>赋能地方经济</Text><br/>
                          借助具脑模型，自动挖掘区域内的高校专利、科研专家团队，匹配地方企业的真实技术需求，实现知识链与产业链的智能融合，推动地方实体经济的高质量发展。
                        </Paragraph>
                      </Card>
                    </Col>
                  </Row>
                )}

                {activeScenarioTab === 'tos' && (
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={12}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #d9f7be', boxShadow: '0 8px 24px rgba(82,196,26,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <TeamOutlined style={{ fontSize: '28px', color: '#52c41a', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>高中生涯培养一体机</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                          结合新高考改革，为高中学子提供一站式的生涯规划指导。<br/><br/>
                          <Text strong style={{ color: '#52c41a' }}>知己与数字分身</Text><br/>
                          利用“知己”模型构建学生的数字分身，结合<Text strong>群体智能</Text>的大数据样本，帮助学生在庞杂的信息中，深度了解自身潜能、透视院校专业，规划最适合的高考志愿与未来职业发展路径。
                        </Paragraph>
                      </Card>
                    </Col>
                    <Col xs={24} md={12}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #d9f7be', boxShadow: '0 8px 24px rgba(82,196,26,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <CloudServerOutlined style={{ fontSize: '28px', color: '#52c41a', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>高校智慧建设（私有化部署）</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                          面向高校群体，打造校园专属的私密大模型服务体系。<br/><br/>
                          <Text strong style={{ color: '#52c41a' }}>职业发展与大型建设</Text><br/>
                          落地为<Text strong>“高校职业发展一体机”</Text>，帮助大学生解决就业迷茫；同时支持<Text strong>“校园大模型私有化部署”</Text>和校园级大型智算/数据底座建设，确保师生核心数据不出校，实现开箱即用的智慧校务。
                        </Paragraph>
                      </Card>
                    </Col>
                  </Row>
                )}

                {activeScenarioTab === 'tob' && (
                  <Row gutter={[32, 32]}>
                    <Col xs={24} md={16}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #ffadd2', boxShadow: '0 8px 24px rgba(235,47,150,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <SafetyCertificateOutlined style={{ fontSize: '28px', color: '#eb2f96', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>精准人才招聘与盘点 (核心)</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8 }}>
                          利用具脑/具心模型，基于真实的技能图谱与岗位画像，实现企业招聘的精准人岗匹配。<br/><br/>
                          <Text strong style={{ color: '#eb2f96' }}>降本增效的智能引擎</Text><br/>
                          对于大型国企与500强企业而言，简历的自动化脱水、应聘者真实能力的智能交叉比对，能极大提升HR部门的筛选效率；更能对内部人才进行定期盘点，提升组织人才密度。
                        </Paragraph>
                      </Card>
                    </Col>
                    <Col xs={24} md={8}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #ffadd2', boxShadow: '0 4px 12px rgba(235,47,150,0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                          <ClusterOutlined style={{ fontSize: '20px', color: '#eb2f96', marginRight: '12px' }} />
                          <Title level={5} style={{ color: '#0b1a30', margin: 0 }}>企业产研转化</Title>
                        </div>
                        <Paragraph style={{ color: '#666', lineHeight: 1.6, fontSize: '13px' }}>
                          赋能企业创新体系，帮助企业快速连接科研院所的前沿成果，缩短从“纸面专利”到“车间产品”的转化周期，成为企业技术攻坚的外部智库引擎。
                        </Paragraph>
                      </Card>
                    </Col>
                  </Row>
                )}

                {activeScenarioTab === 'toc' && (
                  <Row gutter={[32, 32]}>
                    <Col xs={24}>
                      <Card className="glass-card" bordered={false} style={{ height: '100%', background: '#fff', border: '1px solid #ffd666', boxShadow: '0 8px 24px rgba(250,173,20,0.08)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                          <HomeOutlined style={{ fontSize: '32px', color: '#faad14', marginRight: '16px' }} />
                          <Title level={4} style={{ color: '#0b1a30', margin: 0 }}>大中衔接、长周期伴随与终身学习</Title>
                        </div>
                        <Paragraph style={{ color: '#555', lineHeight: 1.8, fontSize: '16px' }}>
                          <Text strong style={{ color: '#faad14', fontSize: '18px' }}>具心算力的终端体现：有温度的私密智库</Text><br/><br/>
                          从<Text strong style={{ color: '#d4af37' }}>“大中衔接”</Text>阶段的高考与专业选择开始，平方体系注入家庭的 AI 终端将不再是一个只懂即问即答的消耗品，而是能够提供<Text strong style={{ color: '#d4af37' }}>长周期伴随</Text>的专属教育管家。<br/><br/>
                          它记住了你的每一次探索、你的优势科目、你的职业倾向，并在未来的大学学习、乃至个人的<Text strong style={{ color: '#d4af37' }}>“终身学习”</Text>道路上，持续为你提供个性化的知识推荐与能力模型构建。以此彰显“具心”算力无可替代的“长线记忆与情绪价值”。
                        </Paragraph>
                      </Card>
                    </Col>
                  </Row>
                )}
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
