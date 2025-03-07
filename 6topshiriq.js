// 1. a sonining 4-darajasi
      function calculateFourthPower() {
        const a = parseInt(document.getElementById("inputA").value);
        let result = a * 2;
        result *= 2;
        document.getElementById(
          "result4"
        ).innerText = `${a} sonining 4-darajasi: ${result}`;
      }

      // 2. a sonining 6-darajasi
      function calculateSixthPower() {
        const a = parseInt(document.getElementById("inputB").value);
        const square = a * a;
        const sixthPower = square * square * square;
        document.getElementById(
          "result6"
        ).innerText = `${a} sonining 6-darajasi: ${sixthPower}`;
      }

      // 3. a > 2 va b < 15
      function checkTruthAB() {
        const a = parseInt(document.getElementById("inputA2").value);
        const b = parseInt(document.getElementById("inputB2").value);
        const result = a > 2 && b < 15;
        document.getElementById("resultAB").innerText = result
          ? "Jumlalar rost"
          : "Jumlalar noto'g'ri";
      }

      // 4. a = 9 va b > 3
      function checkTruthA9B3() {
        const a = parseInt(document.getElementById("inputA3").value);
        const b = parseInt(document.getElementById("inputB3").value);
        const result = a === 9 && b > 3;
        document.getElementById("resultA9B3").innerText = result
          ? "Jumlalar rost"
          : "Jumlalar noto'g'ri";
      }

      // 5. a soni b va c sonlar orasida
      function checkTruthABC() {
        const a = parseInt(document.getElementById("inputA4").value);
        const b = parseInt(document.getElementById("inputB4").value);
        const c = parseInt(document.getElementById("inputC4").value);
        const result = a > b && a < c;
        document.getElementById("resultABC").innerText = result
          ? "Jumlalar rost"
          : "Jumlalar noto'g'ri";
      }

      // 6. a va b sonlari manfiy yoki c soni manfiy
      function checkTruthABCManfiy() {
        const a = parseInt(document.getElementById("inputA5").value);
        const b = parseInt(document.getElementById("inputB5").value);
        const c = parseInt(document.getElementById("inputC5").value);
        const result = (a < 0 && b < 0) || c < 0;
        document.getElementById("resultABCManfiy").innerText = result
          ? "Jumlalar rost"
          : "Jumlalar noto'g'ri";
      }

      // 7. a soni juft yoki toq
      function checkEvenOdd() {
        const a = parseInt(document.getElementById("inputA6").value);
        const result = a % 2 === 0 ? "Juft son" : "Toq son";
        document.getElementById(
          "resultEvenOdd"
        ).innerText = `${a} soni: ${result}`;
      }
