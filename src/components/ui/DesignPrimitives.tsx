import React from 'react';

const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(' ');

type HeadingLevel = 1 | 2 | 3;
type HeaderAlign = 'left' | 'center';

interface EditorialHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  description?: React.ReactNode;
  align?: HeaderAlign;
  level?: HeadingLevel;
  light?: boolean;
  className?: string;
}

export const EditorialHeader: React.FC<EditorialHeaderProps> = ({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
  level = 2,
  light = false,
  className = '',
}) => {
  const Heading = level === 1 ? 'h1' : level === 3 ? 'h3' : 'h2';

  return (
    <div
      className={cx(
        'flex flex-col',
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
        className
      )}
    >
      <span className="is-eyebrow">{eyebrow}</span>
      <Heading
        className={cx(
          'is-display mt-5 text-4xl md:text-5xl lg:text-6xl',
          light && 'is-display--light'
        )}
      >
        {title}
        {accent && (
          <>
            <br />
            <span className="italic font-light text-accent">{accent}</span>
          </>
        )}
      </Heading>
      <div className="is-luxury-rule mt-6" />
      {description && (
        <p className={cx('is-copy is-visually-balanced-text mt-6', light && 'text-accent')}>
          {description}
        </p>
      )}
    </div>
  );
};

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  dark?: boolean;
}

export const Surface: React.FC<SurfaceProps> = ({
  interactive = false,
  dark = false,
  className = '',
  children,
  ...props
}) => (
  <div
    className={cx(
      'is-surface',
      interactive && 'is-surface--interactive',
      dark && 'is-surface--dark',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

interface MetricPillProps {
  value: string;
  label: string;
  detail?: string;
  dark?: boolean;
}

export const MetricPill: React.FC<MetricPillProps> = ({ value, label, detail, dark = false }) => (
  <div className={cx('px-5 py-5 text-center', dark && 'text-sand-dune')}>
    <p className="is-metric font-heading text-4xl md:text-5xl font-semibold text-slate-is">
      {value}
    </p>
    <p className={cx('mt-2 text-xs font-bold uppercase tracking-widest', dark ? 'text-accent' : 'text-ink')}>
      {label}
    </p>
    {detail && <p className="mt-1 text-xs text-muted-light">{detail}</p>}
  </div>
);

interface ArrowIconProps {
  className?: string;
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

