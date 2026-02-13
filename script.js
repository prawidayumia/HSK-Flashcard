body { 
    font-family: 'Segoe UI', Arial, sans-serif; 
    background: #fdf2f2; 
    display: flex; 
    justify-content: center; 
    padding: 20px; 
    color: #333;
}
.container { 
    background: white; 
    padding: 25px; 
    border-radius: 20px; 
    box-shadow: 0 10px 25px rgba(0,0,0,0.1); 
    width: 100%; 
    max-width: 600px; 
    text-align: center; 
}

h1, h2 { color: #d32f2f; }

/* Flashcard */
.card { perspective: 1000px; width: 220px; height: 160px; margin: 20px auto; cursor: pointer; }
.card-inner { 
    position: relative; 
    width: 100%; 
    height: 100%; 
    transition: transform 0.6s; 
    transform-style: preserve-3d; 
    border: 3px solid #ee4d2d; 
    border-radius: 15px; 
}
.card.flipped .card-inner { transform: rotateY(180deg); }
.card-front, .card-back { 
    position: absolute; 
    width: 100%; 
    height: 100%; 
    backface-visibility: hidden; 
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
}
.card-front { font-size: 40px; font-weight: bold; color: #ee4d2d; }
.card-back { background-color: #ee4d2d; color: white; transform: rotateY(180deg); border-radius: 10px; }
#pinyin { font-size: 1.2rem; margin-bottom: 5px; font-weight: bold; }

.main-btn { background: #333; color: white; padding: 10px 20px; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem; }

/* Quiz */
.option-btn { 
    display: block; 
    width: 100%; 
    margin: 8px 0; 
    padding: 12px; 
    border: 1px solid #ddd; 
    border-radius: 10px; 
    cursor: pointer; 
    background: white;
    font-size: 1rem;
    transition: 0.2s;
}
.option-btn:hover { background: #fff5f5; border-color: #ee4d2d; }
#score-display { margin-top: 15px; font-weight: bold; font-size: 1.2rem; color: #2e7d32; }

/* Vocabulary Grid */
.vocab-grid { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); 
    gap: 15px; 
    margin-top: 20px; 
}
.vocab-item { 
    background: #fffafa; 
    padding: 15px; 
    border-radius: 12px; 
    border: 1px solid #ffebeb; 
    text-align: center; 
}
.v-hanzi { display: block; font-size: 1.8rem; font-weight: bold; color: #ee4d2d; }
.v-pinyin { display: block; font-size: 0.9rem; color: #666; font-style: italic; }
.v-meaning { display: block; font-size: 0.9rem; color: #333; margin-top: 5px; }

hr { margin: 40px 0; border: 0; border-top: 1px solid #eee; }
