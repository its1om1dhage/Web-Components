import React from 'react'

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 className="text-gradient" style={{ marginBottom: '16px' }}>
          Component Library
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#94a3b8', 
          maxWidth: '520px', 
          margin: '0 auto 32px',
          lineHeight: '1.6'
        }}>
          A collection of reusable React components and templates. 
          Copy, paste, and customize to speed up your development.
        </p>
        <div style={{
          display: 'inline-flex',
          padding: '8px 16px',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: '20px',
          color: '#a5b4fc',
          fontSize: '14px',
          fontWeight: '500'
        }}>
          ✨ Copy & paste ready
        </div>
      </section>

      {/* Features Grid */}
      <section>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          marginBottom: '60px'
        }}>
          <div style={{ 
            padding: '24px', 
            background: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '8px'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🧩</div>
            <h3 style={{ color: '#f1f5f9', marginBottom: '12px' }}>UI Components</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              Production-ready components with clean code and modern styling
            </p>
          </div>

          <div style={{ 
            padding: '32px', 
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📄</div>
            <h3 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Page Templates</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              Complete layouts for landing pages, dashboards, and more
            </p>
          </div>

          <div style={{ 
            padding: '32px', 
            background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(8, 145, 178, 0.05) 100%)',
            border: '1px solid rgba(124, 58, 237, 0.2)',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>📝</div>
            <h3 style={{ color: '#f1f5f9', marginBottom: '12px' }}>Form Elements</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              Accessible forms with validation and beautiful interactions
            </p>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section style={{ 
        padding: '48px 32px', 
        background: 'rgba(30, 41, 59, 0.5)', 
        borderRadius: '16px',
        border: '1px solid rgba(100, 116, 139, 0.2)'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '48px', color: '#f1f5f9' }}>
          Everything you need
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '32px' 
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px'
            }}>📋</div>
            <h4 style={{ color: '#f1f5f9', marginBottom: '8px', fontSize: '16px' }}>Copy & Paste</h4>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              One-click copy functionality for instant code access
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(20, 184, 166, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px'
            }}>🎨</div>
            <h4 style={{ color: '#f1f5f9', marginBottom: '8px', fontSize: '16px' }}>Live Preview</h4>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              Interactive demos to see components in action
            </p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px'
            }}>📱</div>
            <h4 style={{ color: '#f1f5f9', marginBottom: '8px', fontSize: '16px' }}>Responsive</h4>
            <p style={{ fontSize: '14px', color: '#94a3b8' }}>
              Mobile-first design that works on all devices
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
