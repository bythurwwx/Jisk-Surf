function enemyCollision(player, enemy) {
    if (player.body.touching.down) {
        // Pausa o jogo e mostra a pergunta
        this.scene.pause();
        showFrenchQuestion(); 
    } else {
        // Jogador morre se tocar de lado
        playerDie();
    }
}
