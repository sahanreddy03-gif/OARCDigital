import { useState } from 'react';
import { useLocation } from 'wouter';
import {
  ArrowLeft, Video, Camera, Square, Smartphone,
  Radio, Users, MessageSquare, Settings, Lightbulb,
  X, ChevronDown
} from 'lucide-react';

function ViewHeader({ onBack }: { onBack: () => void }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(rgba(0,0,0,0.5), transparent)',
      }}
    >
      <button
        className="pj-touch"
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: 'rgba(0,0,0,0.4)',
          backdropFilter: 'blur(12px)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
        onClick={onBack}
        data-testid="button-back"
      >
        <ArrowLeft size={20} strokeWidth={2} />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 12px',
            borderRadius: 'var(--pj-radius-pill)',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(12px)',
            fontSize: 'var(--pj-size-xs)',
            fontWeight: 600,
            color: 'white',
          }}
        >
          <Users size={12} />
          <span className="pj-mono">0</span>
        </div>
        <button
          className="pj-touch"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(12px)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
          data-testid="button-settings"
        >
          <Settings size={18} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function Viewfinder() {
  return (
    <div
      style={{
        position: 'relative',
        aspectRatio: '9/16',
        maxHeight: '65vh',
        background: 'var(--pj-surface-1)',
        borderRadius: 'var(--pj-radius-lg)',
        overflow: 'hidden',
        margin: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', padding: 24 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--pj-surface-3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <Video size={24} strokeWidth={1.5} style={{ color: 'var(--pj-text-tertiary)' }} />
        </div>
        <p style={{ fontSize: 'var(--pj-size-body)', fontWeight: 600, color: 'var(--pj-text-secondary)', marginBottom: 4 }}>
          Camera preview
        </p>
        <p style={{ fontSize: 'var(--pj-size-xs)', color: 'var(--pj-text-tertiary)' }}>
          Tap record to start streaming
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 12,
          left: 12,
          right: 12,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            padding: '4px 10px',
            borderRadius: 'var(--pj-radius-pill)',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            fontSize: 'var(--pj-size-micro)',
            fontWeight: 600,
            color: 'var(--pj-text-secondary)',
          }}
        >
          9:16
        </div>
        <div
          style={{
            padding: '4px 10px',
            borderRadius: 'var(--pj-radius-pill)',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            fontSize: 'var(--pj-size-micro)',
            fontWeight: 600,
            color: 'var(--pj-text-secondary)',
          }}
        >
          HD 1080p
        </div>
      </div>
    </div>
  );
}

function StreamPresets({ active, onChange }: { active: string; onChange: (v: string) => void }) {
  const presets = [
    { id: 'product', label: 'Product', Icon: Smartphone },
    { id: 'tour', label: 'Tour', Icon: Video },
    { id: 'portrait', label: 'Portrait', Icon: Camera },
  ];

  return (
    <div style={{ padding: '16px 16px 0', display: 'flex', gap: 8 }}>
      {presets.map((p) => (
        <button
          key={p.id}
          className={`pj-pill ${active === p.id ? 'pj-pill-active' : ''}`}
          onClick={() => onChange(p.id)}
          data-testid={`button-preset-${p.id}`}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <p.Icon size={14} strokeWidth={2} />
          {p.label}
        </button>
      ))}
    </div>
  );
}

function RecordControls({ onRecord }: { onRecord: () => void }) {
  return (
    <div style={{ padding: '20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
      <button
        className="pj-touch"
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--pj-surface-2)',
          border: '1px solid var(--pj-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--pj-text-secondary)',
        }}
        data-testid="button-flip-camera"
      >
        <Camera size={18} strokeWidth={2} />
      </button>

      <button
        className="pj-touch"
        onClick={onRecord}
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: 'transparent',
          border: '3px solid var(--pj-red)',
          padding: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        data-testid="button-record"
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'var(--pj-red)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Radio size={24} strokeWidth={2.5} style={{ color: 'white' }} />
        </div>
      </button>

      <button
        className="pj-touch"
        style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--pj-surface-2)',
          border: '1px solid var(--pj-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--pj-text-secondary)',
        }}
        data-testid="button-chat"
      >
        <MessageSquare size={18} strokeWidth={2} />
      </button>
    </div>
  );
}

function CoachingTip() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div style={{ padding: '0 16px 24px' }}>
      <div
        className="pj-card"
        style={{
          padding: 16,
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
          borderColor: 'var(--pj-border-hover)',
        }}
      >
        <Lightbulb size={18} strokeWidth={2} style={{ color: 'var(--pj-gold)', flexShrink: 0, marginTop: 2 }} />
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 'var(--pj-size-small)', fontWeight: 700, color: 'var(--pj-text)', marginBottom: 4 }}>
            Quick tip
          </h4>
          <p style={{ fontSize: 'var(--pj-size-xs)', color: 'var(--pj-text-tertiary)', lineHeight: 1.5 }}>
            Start with your best product. Smile, introduce yourself, and tell viewers what makes it special. Keep it under 15 minutes for best engagement.
          </p>
        </div>
        <button
          className="pj-touch"
          onClick={() => setDismissed(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--pj-text-tertiary)',
            padding: 4,
          }}
          data-testid="button-dismiss-tip"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}

export default function RecordingStudio() {
  const [, navigate] = useLocation();
  const [preset, setPreset] = useState('product');

  return (
    <div
      style={{
        minHeight: '100dvh',
        background: 'var(--pj-black)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative' }}>
        <ViewHeader onBack={() => navigate('/pjazza/business/dashboard')} />
      </div>

      <div style={{ paddingTop: 56 }}>
        <Viewfinder />
      </div>

      <StreamPresets active={preset} onChange={setPreset} />

      <div style={{ flex: 1 }} />

      <RecordControls onRecord={() => {}} />
      <CoachingTip />
    </div>
  );
}
