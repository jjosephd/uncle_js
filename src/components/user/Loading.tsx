const LoadingSpinner: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-16 h-16">
        {/* Subtle outer glow */}
        <div
          className="absolute inset-0 w-20 h-20 rounded-full opacity-10 animate-pulse"
          style={{
            background:
              'conic-gradient(from 0deg, #22c55e, #8b5cf6, #f97316, #22c55e)',
            filter: 'blur(8px)',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />

        {/* Main spinner ring */}
        <div
          className="relative w-16 h-16 rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, #22c55e 0deg, #22c55e 120deg, #8b5cf6 120deg, #8b5cf6 240deg, #f97316 240deg, #f97316 360deg)',
            animation: 'spin 1s linear infinite',
          }}
        >
          {/* Inner cutout */}
          <div
            className="absolute rounded-full"
            style={{
              inset: '4px',
              background: '#0f0f0f',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <>
      <LoadingSpinner />
    </>
  );
};

export default Loading;
