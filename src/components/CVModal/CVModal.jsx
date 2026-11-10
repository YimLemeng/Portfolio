import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Download, 
  Printer, 
  FileText, 
  Loader2 
} from 'lucide-react';
import CVTemplate from '../CVTemplate/CVTemplate';
import { useLanguage } from '../../context/LanguageContext';
import styles from './CVModal.module.css';

export default function CVModal({ 
  isOpen, 
  onClose, 
  onDownloadPdf, 
  isGeneratingPdf = false 
}) {
  const { t, language: appLanguage } = useLanguage();
  const [modalLanguage, setModalLanguage] = useState(appLanguage);
  const [scale, setScale] = useState(1);
  const [isAutoFit, setIsAutoFit] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const printElementRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setModalLanguage(appLanguage);
    }
  }, [isOpen, appLanguage]);

  const calculateFitScale = useCallback(() => {
    if (typeof window === 'undefined') return 1;
    const padding = window.innerWidth < 640 ? 24 : 64;
    const availableWidth = window.innerWidth - padding;
    if (availableWidth < 740) {
      return Math.min(1, Math.max(0.4, Number((availableWidth / 740).toFixed(2))));
    }
    return 1;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const initial = calculateFitScale();
    setScale(initial);
    setIsAutoFit(initial < 1);

    const handleResize = () => {
      if (isAutoFit || window.innerWidth < 768) {
        setScale(calculateFitScale());
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, calculateFitScale, isAutoFit]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleZoomIn = () => {
    setIsAutoFit(false);
    setScale((prev) => Math.min(1.5, Number((prev + 0.1).toFixed(2))));
  };

  const handleZoomOut = () => {
    setIsAutoFit(false);
    setScale((prev) => Math.max(0.4, Number((prev - 0.1).toFixed(2))));
  };

  const handleToggleFit = () => {
    if (scale !== 1) {
      setScale(1);
      setIsAutoFit(false);
    } else {
      const fit = calculateFitScale();
      setScale(fit);
      setIsAutoFit(true);
    }
  };

  const handlePrint = useCallback(async () => {
    if (isPrinting) return;
    setIsPrinting(true);

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = printElementRef.current;
      if (!element) {
        window.print();
        return;
      }

      const opt = {
        margin: 0,
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      };

      const canvas = await html2pdf().from(element).set(opt).toCanvas().get('canvas');
      const imgData = canvas.toDataURL('image/png');

      const iframe = document.createElement('iframe');
      iframe.style.position = 'fixed';
      iframe.style.right = '0';
      iframe.style.bottom = '0';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = '0';
      document.body.appendChild(iframe);

      const frameDoc = iframe.contentWindow.document;
      frameDoc.open();
      frameDoc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>YIM LEMENG - CV</title>
            <style>
              @page {
                size: A4 portrait;
                margin: 0;
              }
              * {
                box-sizing: border-box;
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
              html, body {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                background: #ffffff;
                overflow: hidden;
              }
              img {
                width: 210mm;
                height: 297mm;
                display: block;
              }
            </style>
          </head>
          <body>
            <img src="${imgData}" onload="setTimeout(() => { window.focus(); window.print(); }, 150);" />
          </body>
        </html>
      `);
      frameDoc.close();

      setTimeout(() => {
        try {
          document.body.removeChild(iframe);
        } catch (e) {}
      }, 60000);
    } catch (err) {
      console.error('Print failed:', err);
    } finally {
      setIsPrinting(false);
    }
  }, [isPrinting]);

  useEffect(() => {
    if (!isOpen) return;
    const handlePrintKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        handlePrint();
      }
    };
    window.addEventListener('keydown', handlePrintKey);
    return () => window.removeEventListener('keydown', handlePrintKey);
  }, [isOpen, handlePrint]);

  const isKhmer = modalLanguage === 'km';
  const modalTexts = t?.hero?.cvModal || {
    title: isKhmer ? 'ប្រវត្តិរូបសង្ខេប (CV)' : 'Curriculum Vitae',
    subtitle: isKhmer ? 'ផ្ទាំងមើលទម្រង់ A4' : 'A4 Format Preview',
    downloadPdf: isKhmer ? 'ទាញយក PDF' : 'Download PDF',
    print: isKhmer ? 'បោះពុម្ព' : 'Print',
    zoomIn: isKhmer ? 'ពង្រីក' : 'Zoom In',
    zoomOut: isKhmer ? 'បង្រួម' : 'Zoom Out',
    fitWidth: isKhmer ? 'ទំហំពេញ' : 'Fit Width',
    close: isKhmer ? 'បិទ' : 'Close',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.modalBackdrop} onClick={onClose}>
          <motion.div 
            className={styles.modalContainer}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
          >
            {/* Header Toolbar */}
            <header className={styles.header}>
              <div className={styles.headerLeft}>
                <div className={styles.titleIconBadge}>
                  <FileText size={18} />
                </div>
                <div>
                  <h2 id="cv-modal-title" className={styles.title}>
                    {modalTexts.title}
                  </h2>
                  <span className={styles.badge}>{modalTexts.subtitle}</span>
                </div>
              </div>

              {/* Action Controls */}
              <div className={styles.headerActions}>
                {/* Language Switcher */}
                <div className={styles.langPill}>
                  <button 
                    type="button"
                    className={`${styles.langBtn} ${modalLanguage === 'en' ? styles.langActive : ''}`}
                    onClick={() => setModalLanguage('en')}
                    title="English CV"
                  >
                    EN
                  </button>
                  <button 
                    type="button"
                    className={`${styles.langBtn} ${modalLanguage === 'km' ? styles.langActive : ''}`}
                    onClick={() => setModalLanguage('km')}
                    title="Khmer CV"
                  >
                    ខ្មែរ
                  </button>
                </div>

                {/* Zoom Controls */}
                <div className={styles.zoomGroup}>
                  <button 
                    type="button"
                    onClick={handleZoomOut}
                    className={styles.toolBtn} 
                    title={modalTexts.zoomOut}
                    disabled={scale <= 0.45}
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span className={styles.zoomText}>
                    {Math.round(scale * 100)}%
                  </span>
                  <button 
                    type="button"
                    onClick={handleZoomIn}
                    className={styles.toolBtn} 
                    title={modalTexts.zoomIn}
                    disabled={scale >= 1.45}
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button 
                    type="button"
                    onClick={handleToggleFit}
                    className={`${styles.toolBtn} ${isAutoFit ? styles.activeToolBtn : ''}`} 
                    title={modalTexts.fitWidth}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Print button */}
                <button 
                  type="button"
                  onClick={handlePrint}
                  disabled={isPrinting || isGeneratingPdf}
                  className={styles.iconActionBtn}
                  title={modalTexts.print}
                >
                  {isPrinting ? (
                    <Loader2 className={styles.spinner} size={16} />
                  ) : (
                    <Printer size={16} />
                  )}
                  <span className={styles.actionBtnLabel}>
                    {isPrinting ? (isKhmer ? 'កំពុងរៀបចំ...' : 'Preparing...') : modalTexts.print}
                  </span>
                </button>

                {/* Download PDF button */}
                <button 
                  type="button"
                  onClick={onDownloadPdf}
                  disabled={isGeneratingPdf}
                  className={styles.downloadBtn}
                  title={modalTexts.downloadPdf}
                >
                  {isGeneratingPdf ? (
                    <>
                      <Loader2 className={styles.spinner} size={16} />
                      <span className={styles.actionBtnLabel}>
                        {isKhmer ? 'កំពុងបង្កើត...' : 'Generating...'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span className={styles.actionBtnLabel}>
                        {modalTexts.downloadPdf}
                      </span>
                    </>
                  )}
                </button>

                {/* Close Button */}
                <button 
                  type="button"
                  onClick={onClose}
                  className={styles.closeBtn}
                  aria-label={modalTexts.close}
                  title={modalTexts.close}
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Modal Scrollable Body */}
            <div className={styles.modalBody}>
              {/* Hidden offscreen unscaled CV for 1-page pristine A4 print rendering */}
              <div 
                style={{ 
                  position: 'fixed', 
                  top: '-99999px', 
                  left: '-99999px', 
                  width: '740px', 
                  pointerEvents: 'none', 
                  zIndex: -99999 
                }}
                aria-hidden="true"
              >
                <CVTemplate ref={printElementRef} language={modalLanguage} isPreview={false} />
              </div>

              <div 
                className={styles.cvScaleWrapper}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  width: '740px',
                  height: '1047px',
                  marginBottom: scale < 1 ? `-${Math.round(1047 * (1 - scale))}px` : '32px',
                }}
              >
                <div className={styles.printableCv}>
                  <CVTemplate language={modalLanguage} isPreview={true} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
