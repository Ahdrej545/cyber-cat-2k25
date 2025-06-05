document.addEventListener('DOMContentLoaded', function() {
    // Инициализация частиц
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#8a2be2" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#05d9e8",
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        }
    });

    // Матричный дождь
    const matrixRain = document.getElementById('matrixRain');
    const chars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*";
    
    for (let i = 0; i < 50; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${Math.random() * 100}%`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        column.style.animationDuration = `${1 + Math.random() * 3}s`;
        
        let text = '';
        for (let j = 0; j < 50; j++) {
            text += chars[Math.floor(Math.random() * chars.length)];
        }
        column.textContent = text;
        
        matrixRain.appendChild(column);
    }

    // Терминал с анимацией текста
    const terminalText = document.getElementById('terminalText');
    const terminalOutput = document.getElementById('terminalOutput');
    const terminalCommand = document.getElementById('terminalCommand');
    const messages = [
        "> Обнаружен пользователь: Гость",
        "> Уровень доступа: ОМЕГА",
        "> Анализ биометрических данных...",
        "> Уровень стресса: 12%",
        "> Уровень вовлеченности: 98%",
        "> Рекомендация: повысить уровень доступа",
        "> Запуск протокола 'ОКАК'...",
        "> Подключение к центральному ИИ... УСПЕШНО",
        "> Мем 'Окак' достиг пика виральности 15.05.2025",
        "> Количество репостов: 1,427,891"
    ];
    
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeTerminalText() {
        const currentMessage = messages[messageIndex];
        
        if (!isDeleting && charIndex <= currentMessage.length) {
            terminalText.textContent = currentMessage.substring(0, charIndex);
            charIndex++;
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            setTimeout(typeTerminalText, 50);
        } else if (isDeleting && charIndex >= 0) {
            terminalText.textContent = currentMessage.substring(0, charIndex);
            charIndex--;
            setTimeout(typeTerminalText, 30);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                messageIndex = (messageIndex + 1) % messages.length;
            }
            setTimeout(typeTerminalText, 1000);
        }
    }
    
    // Имитация ввода команд
    const commands = [
        "analyze meme",
        "run viral_spread",
        "scan user",
        "connect neural_network",
        "initiate hologram",
        "enable matrix_vision"
    ];
    
    let commandIndex = 0;
    let cmdCharIndex = 0;
    let isCmdDeleting = false;
    
    function typeCommand() {
        const currentCommand = commands[commandIndex];
        
        if (!isCmdDeleting && cmdCharIndex <= currentCommand.length) {
            terminalCommand.textContent = currentCommand.substring(0, cmdCharIndex);
            cmdCharIndex++;
            setTimeout(typeCommand, 100);
        } else if (isCmdDeleting && cmdCharIndex >= 0) {
            terminalCommand.textContent = currentCommand.substring(0, cmdCharIndex);
            cmdCharIndex--;
            setTimeout(typeCommand, 50);
        } else {
            isCmdDeleting = !isCmdDeleting;
            if (!isCmdDeleting) {
                commandIndex = (commandIndex + 1) % commands.length;
            }
            setTimeout(typeCommand, 2000);
        }
    }
    
    // Запуск анимаций терминала
    setTimeout(() => {
        typeTerminalText();
        typeCommand();
    }, 3000);

    // Аудио эффекты
const sounds = {
    sound1: new Audio("./assets/sounds/notification.mp3"),
    sound2: new Audio("./assets/sounds/suspense.mp3"),
    sound3: new Audio("./assets/sounds/cat-roar.mp3")
};

    document.getElementById('sound1').addEventListener('click', () => {
        sounds.sound1.currentTime = 0;
        sounds.sound1.play();
        
        // Анимация вспышки
        document.body.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
        setTimeout(() => {
            document.body.style.backgroundColor = '';
        }, 300);
    });

    document.getElementById('sound2').addEventListener('click', () => {
        sounds.sound2.currentTime = 0;
        sounds.sound2.play();
        
        // Анимация для кнопки
        const btn = document.getElementById('sound2');
        btn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 300);
    });

    document.getElementById('sound3').addEventListener('click', () => {
        sounds.sound3.currentTime = 0;
        sounds.sound3.play();
        
        // Анимация кота
        const eyes = document.querySelectorAll('.eye');
        eyes.forEach(eye => {
            eye.style.height = '5px';
            setTimeout(() => {
                eye.style.height = '';
            }, 200);
        });
    });

    // Активация системы
    document.getElementById('activateBtn').addEventListener('click', function() {
        this.textContent = "СИСТЕМА АКТИВИРОВАНА!";
        this.style.background = 'var(--neon-green)';
        this.style.color = 'var(--dark-bg)';
        this.style.boxShadow = '0 0 40px var(--neon-green)';
        this.style.borderColor = 'var(--neon-green)';
        
        // Анимация активации
        const cat = document.querySelector('.cat-hood');
        cat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            cat.style.transform = '';
        }, 500);
        
        // Запуск анимации куба
        document.querySelector('.cube').style.animation = 'rotateCube 10s infinite linear';
        
        // Усиление частиц
        particlesJS('particles-js', {
            particles: {
                number: { value: 150, density: { enable: true, value_area: 800 } },
                color: { value: "#8a2be2" },
                shape: { type: "circle" },
                opacity: { value: 0.7, random: true },
                size: { value: 5, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#05d9e8",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            }
        });
        
        // Показать все карточки
        document.querySelectorAll('.card').forEach(card => {
            card.classList.add('visible');
        });
    });

    // Параллакс эффект
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const parallax = document.querySelector('.parallax-bg');
        parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Анимация появления карточек при скролле
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });

    // Цифровые часы
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('digitalClock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Интерактивный фон
    const interactiveBg = document.getElementById('interactiveBg');
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'bg-element';
        element.style.width = `${100 + Math.random() * 200}px`;
        element.style.height = element.style.width;
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        element.style.opacity = `${0.05 + Math.random() * 0.1}`;
        element.style.animation = `pulse ${5 + Math.random() * 10}s infinite alternate`;
        interactiveBg.appendChild(element);
    }

    // Эффект глитча
    function triggerGlitch() {
        const glitch = document.getElementById('digitalGlitch');
        glitch.style.opacity = '0.5';
        glitch.style.animation = 'none';
        setTimeout(() => {
            glitch.style.animation = 'glitchEffect 0.3s';
            setTimeout(() => {
                glitch.style.opacity = '0';
            }, 300);
        }, 10);
    }
    
    // Запуск глитча случайным образом
    setInterval(() => {
        if (Math.random() > 0.7) {
            triggerGlitch();
        }
    }, 5000);

    // Интерактивная карта
    const mapNodes = document.querySelectorAll('.map-node');
    mapNodes.forEach(node => {
        node.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            const terminalOutput = document.getElementById('terminalOutput');
            
            // Эффект для узла
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 0 30px var(--neon-blue)';
            setTimeout(() => {
                this.style.transform = '';
                this.style.boxShadow = '';
            }, 500);
            
            // Добавление информации в терминал
            const newEntry = document.createElement('div');
            newEntry.textContent = `> Доступ к узлу: ${info}`;
            terminalOutput.appendChild(newEntry);
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
            // Звуковой эффект
            sounds.sound1.currentTime = 0;
            sounds.sound1.play();
        });
    });

    // Морфинг логотипа
    const logoText = document.querySelector('.logo-text');
    const variants = ["ОКАК MEME", "0К4К М3М3", "ОКАК МЕМ", "ОКАК MEME"];
    let currentVariant = 0;
    
    function morphLogo() {
        logoText.style.opacity = 0;
        setTimeout(() => {
            currentVariant = (currentVariant + 1) % variants.length;
            logoText.textContent = variants[currentVariant];
            logoText.style.opacity = 1;
        }, 500);
    }
    
    setInterval(morphLogo, 3000);
    document.querySelector('.logo').addEventListener('click', morphLogo);

    // Пульсирующие круги для узлов карты
    function addPulseEffects() {
        const nodes = document.querySelectorAll('.map-node');
        nodes.forEach(node => {
            setInterval(() => {
                if (Math.random() > 0.5) {
                    const circle = document.createElement('div');
                    circle.className = 'pulse-circle';
                    circle.style.width = `${node.offsetWidth}px`;
                    circle.style.height = `${node.offsetHeight}px`;
                    circle.style.top = '0';
                    circle.style.left = '0';
                    node.appendChild(circle);
                    
                    setTimeout(() => {
                        node.removeChild(circle);
                    }, 2000);
                }
            }, 3000);
        });
    }

    // Динамические частицы
    function createParticles() {
        const container = document.getElementById('particlesContainer');
        const colors = ['#8a2be2', '#05d9e8', '#ff2a6d', '#39ff14'];
        
        setInterval(() => {
            if (Math.random() > 0.3) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Случайные свойства
                const size = 2 + Math.random() * 8;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = color;
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
                
                // Анимация
                const duration = 2 + Math.random() * 5;
                particle.style.animation = `float ${duration}s linear forwards`;
                
                container.appendChild(particle);
                
                // Удаление после завершения анимации
                setTimeout(() => {
                    if (particle.parentNode) {
                        container.removeChild(particle);
                    }
                }, duration * 1000);
            }
        }, 100);
    }

    // Анимация плавающих частиц
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0.7; }
            100% { transform: translateY(${Math.random() > 0.5 ? '-' : ''}${20 + Math.random() * 50}vh) 
                     translateX(${Math.random() > 0.5 ? '-' : ''}${10 + Math.random() * 30}vw); 
                   opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Анимация счетчика
    let count = 1427891;
    const counterElement = document.getElementById('share-count');
    
    setInterval(() => {
        count += Math.floor(Math.random() * 10) + 1;
        counterElement.textContent = count.toLocaleString('ru-RU');
    }, 2000);
    
    // Интерактивный фон для кота
    document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.body.style.background = `
            radial-gradient(
                circle at ${x * 100}% ${y * 100}%,
                #2a0a46 0%,
                #0d0d0d 70%
            )
        `;
    });

    // Инициализация функций при загрузке
    addPulseEffects();
    createParticles();
});