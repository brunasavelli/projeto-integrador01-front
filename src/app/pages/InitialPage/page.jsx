"use client";

import styles from "./InitialPage.module.css";
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Header from "@/components/Header/page.jsx";

const slides = [
    {
        src: 'https://images.pexels.com/photos/6129499/pexels-photo-6129499.jpeg',
        alt: 'Foto 1',
        title: 'Gestão hospitalar inteligente',
        subtitle: 'Controle total sobre pacientes e equipe médica'
    },
    {
        src: 'https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg',
        alt: 'Foto 2',
        title: 'Cuidado com excelência',
        subtitle: 'Ferramentas modernas para atendimento de qualidade'
    },
    {
        src: 'https://images.pexels.com/photos/4006979/pexels-photo-4006979.jpeg',
        alt: 'Foto 3',
        title: 'Tecnologia a serviço da saúde',
        subtitle: 'Sistema integrado de controle e monitoramento'
    },
    {
        src: 'https://images.pexels.com/photos/6129052/pexels-photo-6129052.jpeg',
        alt: 'Foto 4',
        title: 'Equipe e pacientes conectados',
        subtitle: 'Histórico completo sempre ao alcance das mãos'
    },
];

export default function InitialPage() {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)
    const [progress, setProgress] = useState(0)
    const progressRef = useRef(null)

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % slides.length)
        setProgress(0)
    }, [])

    const prev = () => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length)
        setProgress(0)
    }

    const goTo = (i) => {
        setCurrent(i)
        setProgress(0)
    }

    useEffect(() => {
        if (paused) return
        const timer = setInterval(next, 4000)
        return () => clearInterval(timer)
    }, [paused, next])

    useEffect(() => {
        if (paused) {
            clearInterval(progressRef.current)
            return
        }

        let p = 0
        const step = 100 / 30

        progressRef.current = setInterval(() => {
            p = Math.min(p + step, 100)
            setProgress(p)
        }, 100)

        return () => {
            clearInterval(progressRef.current)
            setProgress(0) 
        }
    }, [current, paused])

    return (
        <div className={styles.container}>
            <div
                className={styles.carouselWrap}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className={styles.slides}
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((slide, i) => (
                        <div key={i} className={styles.slide}>
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className={styles.slideImg}
                                priority={i === 0}
                            />

                            <div className={styles.slideOverlay} />

                            <div className={styles.slideLabel}>
                                <h2>{slide.title}</h2>
                                <p>{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button onClick={prev} className={`${styles.carouselBtn} ${styles.prev}`}>‹</button>
                <button onClick={next} className={`${styles.carouselBtn} ${styles.next}`}>›</button>

                <div className={styles.dots}>
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        />
                    ))}
                </div>

                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.text}>
                    <h3>Sobre o projeto</h3>
                    <p>
                        Texto falando sobre o projeto Texto falando sobre o projeto Texto falando sobre o projeto
                        Texto falando sobre o projeto Texto falando sobre o projeto Texto falando sobre o projeto
                    </p>
                </div>
            </div>
        </div>
    )
}