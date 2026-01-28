// Quiz Questions Database
const quizData = {
    moduleQuiz: [
        {
            id: 1,
            question: "At a Blackjack table with a $5,000 maximum, the controlling player bets $3,500 and two back-bettors add $1,000 each for a total of $5,500. The error is discovered before any cards are dealt. What is the correct procedure?",
            options: [
                "Return $500 to the controlling player",
                "Return $250 to each back-bettor",
                "Return $500 to the back-bettors (prioritizing the last bettor)",
                "Void the entire wager and restart the hand"
            ],
            correct: 2,
            explanation: "The controlling player has first entitlement up to the maximum. Since they bet $3,500, back-bettors can add up to $1,500 total. The excess $500 is returned to back-bettors first, starting with the last bettor (outside-in). BJ Rule 6.6.1(d)",
            module: 1
        },
        {
            id: 2,
            question: "A wager of $6,500 is discovered on a Blackjack box with a $5,000 maximum AFTER the hand has been dealt and completed. The player wins. What is the correct settlement?",
            options: [
                "Pay the entire $6,500 wager at even money",
                "Pay only $5,000 (the maximum) and return the excess $1,500",
                "Void the hand entirely and return the original $6,500",
                "Pay $5,000 and confiscate the excess $1,500"
            ],
            correct: 1,
            explanation: "When an over-limit wager is discovered after the deal has commenced, the wager is paid or collected to the maximum only. Excess funds are returned to the player. Pay $5,000 winning and return $1,500. BJ Rule 7.2.5",
            module: 1
        },
        {
            id: 3,
            question: "Multiple players place bets on a Baccarat Pair side wager, exceeding the limit. Some players have main wagers (Player/Banker), others do not. What is the priority for removing excess wagers?",
            options: [
                "Remove wagers in the order they were placed (first in, first out)",
                "Remove wagers from players without main wagers first (last in, first out)",
                "Remove equal amounts from all players proportionally",
                "The Area Manager decides at their discretion"
            ],
            correct: 1,
            explanation: "Players with valid main wagers have first entitlement to side wagers. Remove/reduce wagers from players without main wagers first using Last In, First Out method. Bacc Rule 6.6.5-6.6.7, WPI 1.7",
            module: 1
        },
        {
            id: 4,
            question: "During a Blackjack game, the dealer forgets to burn a card at the beginning of a new shoe. When should this error be corrected?",
            options: [
                "Immediately stop play and burn a card",
                "Complete the current hand, then burn a card before the next hand",
                "Results stand, play continues without correction",
                "Void the entire shoe and start with a new shuffle"
            ],
            correct: 2,
            explanation: "If the dealer fails to burn a card, results stand and play continues normally. There is no correction procedure. BJ Rule 17.1",
            module: 2
        },
        {
            id: 5,
            question: "A card is drawn in excess to a player's hand but is NOT exposed (undisclosed). What is the correct procedure?",
            options: [
                "Discard the card immediately",
                "Use it as the next card from the shoe",
                "Give it to the dealer's hand",
                "Void the current round"
            ],
            correct: 1,
            explanation: "If an excess card is drawn but not exposed (undisclosed), it is used as the next card from the shoe. This maintains the card sequence. BJ Rule 17.3",
            module: 2
        },
        {
            id: 6,
            question: "Cards are dealt to an empty betting box during the initial deal at a Blackjack table. What is the ruling?",
            options: [
                "The hand plays as normal but with no wager",
                "Transfer the cards to the nearest player with a wager",
                "Round is Void, excess cards are burned",
                "Continue play but remove those cards before player decisions"
            ],
            correct: 2,
            explanation: "If cards are dealt to an empty box during the initial deal, the round is Void and excess cards are burned. BJ Rule 17.4",
            module: 2
        },
        {
            id: 7,
            question: "A card placement error is discovered at a Blackjack table before any interim settlement. The AM decides to reconstruct the hand. What MUST happen first?",
            options: [
                "The dealer must call surveillance for verification",
                "Players must be given the option to retract their wager",
                "The shoe must be replaced with a new one",
                "All cards must be reshuffled immediately"
            ],
            correct: 1,
            explanation: "Before reconstructing a hand due to card placement error, players MUST be given the option to retract their wager. This is a crucial step. BJ Rule 17.5",
            module: 2
        },
        {
            id: 8,
            question: "In Baccarat, an excess card is drawn (undisclosed) during a coup. What happens to this card?",
            options: [
                "It is discarded immediately",
                "It becomes the first card of the next coup",
                "It is added to the current hand",
                "The coup is voided"
            ],
            correct: 1,
            explanation: "An undisclosed excess card in Baccarat becomes the first card of the next coup (unless it's the last coup of the shoe). It is NOT discarded. Bacc Rule 11.2",
            module: 3
        },
        {
            id: 9,
            question: "During a Baccarat coup, the initial totals are Player 4, Banker 5. After correctly drawing a third card for Player, the dealer incorrectly draws a third card for Banker. According to the Table of Play, Banker must stand. What is the procedure?",
            options: [
                "Void the coup and refund all wagers",
                "Count the extra card as part of Banker's hand",
                "Settle the hand, then use the extra card as the first card of next coup (Dummy)",
                "Move the extra card to Player's hand"
            ],
            correct: 2,
            explanation: "When an extra card is dealt to Banker hand and Banker must Stand, settle the hand based on valid totals. The extra card becomes the first card of the next coup, which must be dealt as a Dummy Coup. Bacc Rule 11.6",
            module: 3
        },
        {
            id: 10,
            question: "The electronic display shows Banker wins 7-6, but when you examine the physical cards on the felt, Player actually won 8-5. What is the official result?",
            options: [
                "Banker wins 7-6 (the electronic display is official)",
                "The coup is void due to discrepancy",
                "Player wins 8-5 (physical cards take precedence)",
                "Contact surveillance first before making any determination"
            ],
            correct: 2,
            explanation: "The Actual Cards on the table ALWAYS take precedence over any electronic display. The official result is Player wins 8-5 based on physical evidence. Bacc Rule 11.15",
            module: 3
        },
        {
            id: 11,
            question: "At a Baccarat table, cards are dealt but there are no wagers on the table. What is this called and what should happen?",
            options: [
                "Misdeal - void the hand and reshuffle",
                "Dummy Coup - the hand is dealt but does not count",
                "Free Play - players may place bets after seeing cards",
                "Invalid Coup - contact surveillance immediately"
            ],
            correct: 1,
            explanation: "If cards are dealt with no wagers, it is a Dummy Coup. The hand is completed but does not affect game results. Bacc Rule 11.4",
            module: 3
        },
        {
            id: 12,
            question: "A Roulette ball completes only 2 revolutions before settling into a number. What must be declared?",
            options: [
                "The result stands if no players object",
                "No Spin - the result is invalid",
                "The Area Manager may accept or reject at their discretion",
                "The result stands but must be logged"
            ],
            correct: 1,
            explanation: "The dealer or AM must declare 'No Spin' if the ball does not complete 3 revolutions. The result is invalid regardless of where it lands. Roulette Rule 8.1",
            module: 4
        },
        {
            id: 13,
            question: "On SATG Roulette, the dealer enters the wrong number on the display. What is the correct procedure for the Area Manager?",
            options: [
                "Manually cross out the number and write the correct one",
                "Select 'Roll Back' on display controller, swipe card, enter correct number",
                "Contact surveillance to correct the system",
                "Allow the incorrect number to stand and note it in the log"
            ],
            correct: 1,
            explanation: "For wrong result entry on SATG Roulette, the AM must select 'Roll Back' on the display controller, swipe their card, and enter the correct number. WPI 54.2",
            module: 4
        },
        {
            id: 14,
            question: "During the initial deal at Caribbean Stud Poker, two cards are exposed before any player looks at their hands. What is the ruling?",
            options: [
                "The exposed cards are replaced and play continues",
                "Misdeal - the round is void",
                "Play continues if no player objects",
                "Only the hands with exposed cards are void"
            ],
            correct: 1,
            explanation: "If one or more cards are exposed before players look at their hands during initial deal, it is a Misdeal and the round is void. Poker Minor Rule 13.1",
            module: 5
        },
        {
            id: 15,
            question: "At a Caribbean Stud table, incorrect card counts are discovered AFTER players have looked at their hands. Two hands have incorrect counts, three hands have correct counts. What is the procedure?",
            options: [
                "Entire round is void - return all wagers",
                "Hands with incorrect counts are void; offer other players option to retract",
                "Continue play with all hands as dealt",
                "Reshuffle and re-deal to all players"
            ],
            correct: 1,
            explanation: "When incorrect card count is discovered after players look: hands with incorrect counts are Void. Offer players with correct hands the option to retract wagers. Poker Minor Rule 13.2",
            module: 5
        },
        {
            id: 16,
            question: "A round of Caribbean Stud Poker is declared a Misdeal. All players had placed Jackpot wagers. What happens to the Jackpot bets?",
            options: [
                "All Jackpot wagers are refunded immediately",
                "Jackpot wagers are lost to the house",
                "Jackpot wagers remain valid for the next round (if player stays)",
                "Jackpot wagers are split among all players"
            ],
            correct: 2,
            explanation: "If a round is a Misdeal, Jackpot wagers remain valid for the next round. If a player leaves the table, their Jackpot wager is refunded. Poker Minor Rule 13.9",
            module: 5
        },
        {
            id: 17,
            question: "You arrive at a table with a disputed result. What is the FIRST thing you must do?",
            options: [
                "Listen to the player's complaint",
                "Stop all action and verify physical evidence (cards, chips)",
                "Call surveillance for video review",
                "Ask the dealer what happened"
            ],
            correct: 1,
            explanation: "The first action for any incident is to stop all action and payments instantly. Nothing proceeds until you have verified the physical evidence. Module 6 Checklist",
            module: 6
        },
        {
            id: 18,
            question: "An error occurs at a Blackjack table resulting in a $1,200 incorrect payout to a player. What reporting is required?",
            options: [
                "No reporting required - handle at table level",
                "Log in iTrak only",
                "Notify surveillance only",
                "Log in iTrak and notify surveillance if dispute involves this amount"
            ],
            correct: 1,
            explanation: "Any error exceeding $1,000 must be logged in iTrak. Surveillance must be notified for disputes, system failures, or manual payouts exceeding $5,000. WPI 39.4, 6.2",
            module: 6
        },
        {
            id: 19,
            question: "A guest disputes your decision on the floor and remains unsatisfied after your explanation. What is your responsibility?",
            options: [
                "Offer them a complimentary meal to resolve the situation",
                "Advise them of their right to contact the NICC Inspector",
                "Call your supervisor to make the final decision",
                "Maintain your decision without offering further options"
            ],
            correct: 1,
            explanation: "Your decision is final on the floor. However, if the guest remains unsatisfied, you have a duty to inform them of their right to contact the NICC Inspector. Module 6 Checklist",
            module: 6
        },
        {
            id: 20,
            question: "At a Baccarat table, you discover an error from the previous coup, but the next coup has already been dealt and completed. What is the general rule?",
            options: [
                "Void both coups and restart",
                "Previous result generally stands - cannot be reversed",
                "Review surveillance footage to determine correct action",
                "Offer players the option to void previous coup"
            ],
            correct: 1,
            explanation: "If the next round has already started, previous results generally stand and cannot be reversed. This is the 'Point of No Return' principle. Bacc Rule 11.10, Module 6 Checklist",
            module: 6
        }
    ],

    scenarioQuiz: [
        {
            id: 1,
            question: "Scenario: At a $2,000 max Blackjack table, a controlling player bets $2,000 and a back-bettor adds $500 BEFORE cards are dealt. What should you do?",
            options: [
                "Return the entire $2,500 and void the hand",
                "Return $500 to the back-bettor and proceed with $2,000 wager",
                "Allow the $2,500 bet this one time but warn them",
                "Split the excess evenly and return $250 to each player"
            ],
            correct: 1,
            explanation: "The controlling player has first entitlement to the maximum. Since they already bet $2,000 (the max), return the back-bettor's $500. Wagers are reduced outside-in. BJ Rule 6.6.1(d)",
            scenario: 1
        },
        {
            id: 2,
            question: "Scenario: During a busy night, you notice the dealer at Blackjack dealt to an empty box during the initial deal. What is your ruling?",
            options: [
                "Continue play - no wager means the cards are ignored",
                "Move those cards to the next player with a wager",
                "Round is Void - burn the excess cards",
                "Those cards become the dealer's hand"
            ],
            correct: 2,
            explanation: "If cards are dealt to an empty box during initial deal, the round is Void and excess cards are burned. BJ Rule 17.4",
            scenario: 1
        },
        {
            id: 3,
            question: "Scenario: A Baccarat coup ends with Player 5, Banker 6. After settling, you discover the dealer never burned the first card of the shoe. What do you do?",
            options: [
                "Void the coup and refund all wagers",
                "Burn a card now and replay the coup",
                "Results stand, play continues",
                "Void the entire shoe and start over"
            ],
            correct: 2,
            explanation: "If a dealer fails to burn, results stand and play continues. The failure to burn does not void completed coups. Bacc Rule 11.1",
            scenario: 2
        },
        {
            id: 4,
            question: "Scenario: Baccarat coup with Player 3, Banker 4. Player correctly receives third card. Dealer incorrectly gives Banker a third card when Banker should stand. What do you do?",
            options: [
                "Use the extra card as part of Banker's hand since it's already dealt",
                "Settle the hand with original totals; extra card becomes first card of next coup (Dummy)",
                "Void the coup entirely",
                "Move the extra card to Player's hand"
            ],
            correct: 1,
            explanation: "When extra card is dealt to a hand that must Stand, settle using valid totals. The extra card becomes the first card of next coup, which must be dealt as a Dummy Coup. Bacc Rule 11.6",
            scenario: 2
        },
        {
            id: 5,
            question: "Scenario: The Baccarat electronic screen shows Banker wins 8-5. A player claims Player won. You check the physical cards: Player 7, Banker 6. What is your ruling?",
            options: [
                "Banker wins 8-5 per the screen - technology is reliable",
                "Void the coup due to discrepancy",
                "Player wins 7-6 - physical cards take precedence",
                "Wait for surveillance review before deciding"
            ],
            correct: 2,
            explanation: "Physical cards ALWAYS take precedence over electronic displays. The official result is based on actual cards on the table: Player wins 7-6. Bacc Rule 11.15",
            scenario: 3
        },
        {
            id: 6,
            question: "Scenario: The Super Angel Eye displays 'Bad Card Read' alert during a Baccarat coup. What are your immediate actions?",
            options: [
                "Ignore it if the result seems correct",
                "Void the coup immediately",
                "Stop action, contact Surveillance, verify card order, check for extra cards",
                "Reset the system and continue"
            ],
            correct: 2,
            explanation: "For 'Bad Card Read' alert: stop action, contact Surveillance, verify card order. If extra cards drawn, use for next coup (Dummy). WPI 27.6, Scenario 3",
            scenario: 3
        },
        {
            id: 7,
            question: "Scenario: Caribbean Stud - dealer deals 6 cards to one player, 4 to another. Error discovered AFTER two players with correct hands looked at cards. What do you do?",
            options: [
                "Void all hands - complete misdeal",
                "Fix the incorrect hands by adding/removing cards",
                "Void incorrect-count hands; offer correct-hand players option to retract",
                "Continue play with all hands as dealt"
            ],
            correct: 2,
            explanation: "When incorrect count discovered after players look: void hands with wrong counts. Offer players with correct hands the option to retract their wagers. Poker Minor Rule 13.2",
            scenario: 4
        },
        {
            id: 8,
            question: "Scenario: Following the above Caribbean Stud misdeal, three players choose to retract their wagers. They all had Jackpot bets. What happens to their Jackpot wagers?",
            options: [
                "Jackpot wagers are forfeited",
                "Jackpot wagers remain on the table for next round if they stay; refunded if they leave",
                "Jackpot wagers are refunded immediately regardless",
                "Jackpot wagers carry over only if they place a new Ante"
            ],
            correct: 1,
            explanation: "During a misdeal, Jackpot wagers remain valid for next round if the player stays at the table. If a player leaves, their Jackpot wager is refunded. Poker Minor Rule 13.9",
            scenario: 4
        },
        {
            id: 9,
            question: "Scenario: At a high-limit Baccarat table, total Banker bets are $150,000 and total Player bets are $50,000. The table differential limit is $80,000. The coup result is Banker wins. What must you do?",
            options: [
                "Pay all wagers normally - the result determines action",
                "Void the coup due to excessive differential",
                "Calculate Re-calculated Wager using the formula and pay reduced amounts",
                "Reduce all Banker bets proportionally before the coup"
            ],
            correct: 2,
            explanation: "When table differential is exceeded and result is known, calculate Re-calculated Wager: (Excess ÷ High Side Total) = Reduction Ratio. Apply to each wager on high side. WPI 1.6.1, Module 1.4",
            scenario: "General"
        },
        {
            id: 10,
            question: "Scenario: A Roulette ball spins for 2.5 revolutions and lands in number 17. Several players have large bets on 17. The dealer begins paying. What should you do?",
            options: [
                "Allow the payout - the ball landed in a number",
                "Stop the payout - declare 'No Spin', return all bets",
                "Pay only the large bets and void small bets",
                "Review with surveillance before deciding"
            ],
            correct: 1,
            explanation: "'No Spin' must be declared if ball does not complete 3 revolutions. The result is invalid even if it landed in a number. Stop payouts and return all bets. Roulette Rule 8.1",
            scenario: "General"
        },
        {
            id: 11,
            question: "Scenario: A Blackjack hand is dealt and during play, you discover the dealer accidentally dealt cards in the wrong order to players. No interim settlement has occurred yet. What can you do?",
            options: [
                "Continue play - card order errors cannot be corrected",
                "Void the hand immediately",
                "Reconstruct the hand but MUST offer players option to retract first",
                "Reshuffle and re-deal the same wagers"
            ],
            correct: 2,
            explanation: "Card placement errors discovered before interim settlement can be reconstructed, but players MUST be given option to retract their wager first. BJ Rule 17.5",
            scenario: "General"
        },
        {
            id: 12,
            question: "Scenario: Mid-game at Blackjack, you discover a foreign card in the deck (wrong suit/value from another deck). What is the procedure?",
            options: [
                "Remove the card and continue play",
                "Past results stand; current round void; rest of shoe void",
                "Void all results from this shoe",
                "Continue play if no one noticed"
            ],
            correct: 1,
            explanation: "When incorrect deck is discovered: past results stand, current round is void (money returned), rest of shoe is void. BJ Rule 17.13",
            scenario: "General"
        },
        {
            id: 13,
            question: "Scenario: Baccarat cards are accidentally dealt to the wrong position (Player cards placed in Banker area). You're called immediately. What are your options?",
            options: [
                "Void the coup automatically",
                "Move cards to correct positions only",
                "Choose: coup stands (all bets valid), coup stands (allow retraction), or declare Dummy Coup",
                "Always allow players to retract in this situation"
            ],
            correct: 2,
            explanation: "For wrong position/delivery, AM chooses: coup stands (all bets valid), coup stands (allow retraction/reduction), or declare Dummy Coup. Bacc Rule 11.7",
            scenario: 2
        },
        {
            id: 14,
            question: "Scenario: You respond to a Blackjack dispute about a hand from 3 coups ago. The current coup is in progress. What is your general position?",
            options: [
                "Stop current hand and investigate the disputed hand",
                "Previous results generally stand once next round has started",
                "Void both the disputed hand and current hand",
                "Offer player compensation instead of investigating"
            ],
            correct: 1,
            explanation: "Once the subsequent round has begun, previous results generally stand and cannot be reversed. This is the 'Point of No Return' principle. BJ Rule 17.9.1, Module 6",
            scenario: "General"
        },
        {
            id: 15,
            question: "Scenario: A player claims they won $8,000 on a hand you didn't witness. The dealer says the player lost. Surveillance review will take 20 minutes. What do you do?",
            options: [
                "Side with the dealer - they're more reliable",
                "Pay the player to maintain good relations",
                "Stop all action, secure evidence, wait for surveillance verification",
                "Split the difference and pay $4,000"
            ],
            correct: 2,
            explanation: "Stop all action and verify physical evidence first. For significant disputes, secure all evidence and wait for surveillance verification. Never make decisions without proper evidence. Module 6 Checklist",
            scenario: 3
        }
    ],

    finalAssessment: [
        // This will combine both module and scenario questions with additional comprehensive questions
        ...[], // Will be populated by combining the above arrays in the app
    ]
};

// Populate final assessment with mix of questions
quizData.finalAssessment = [
    ...quizData.moduleQuiz.slice(0, 10),
    ...quizData.scenarioQuiz.slice(0, 10),
    // Additional comprehensive questions
    {
        id: 101,
        question: "You are called to a table where multiple irregularities occurred: a card was exposed, dealt to wrong position, AND the table maximum was exceeded. What is your first priority?",
        options: [
            "Address the exposed card first",
            "Fix the table maximum violation",
            "Stop all action and assess all physical evidence systematically",
            "Call surveillance immediately"
        ],
        correct: 2,
        explanation: "When multiple irregularities occur, always STOP ALL ACTION FIRST and systematically assess physical evidence. Address issues in order of procedural priority. Module 6 Core Principle",
        type: "comprehensive"
    },
    {
        id: 102,
        question: "A regular high-roller insists that your ruling is wrong and threatens to leave the casino. You are certain your ruling is correct per regulations. What should you do?",
        options: [
            "Bend the rule slightly to keep the customer",
            "Maintain your ruling and inform them of their right to contact NICC Inspector",
            "Call your supervisor to override your decision",
            "Offer comps to satisfy the customer"
        ],
        correct: 1,
        explanation: "Your decision is final on the floor. Maintain your ruling and inform unsatisfied guests of their right to contact the NICC Inspector. Never compromise game integrity. Module 6",
        type: "comprehensive"
    },
    {
        id: 103,
        question: "What is the fundamental principle when physical cards conflict with electronic display systems like Super Angel Eye?",
        options: [
            "Electronic systems are more reliable - use screen result",
            "Physical cards always take precedence",
            "Void the result due to discrepancy",
            "Average the two results"
        ],
        correct: 1,
        explanation: "Physical cards ALWAYS take precedence over any electronic display. Electronic systems are aids, not arbiters. This is a non-negotiable foundational rule. Bacc Rule 11.15, Scenario 3",
        type: "comprehensive"
    },
    {
        id: 104,
        question: "When paying or passing chips after settling a wager, what is the required chip arrangement?",
        options: [
            "Lowest denomination on top for easier counting",
            "Highest denomination on top",
            "Mixed denominations to prevent counting",
            "Any arrangement is acceptable"
        ],
        correct: 1,
        explanation: "When paying or passing chips, the highest denomination must be on top of the stack. This is standard procedure. WPI 35.2",
        type: "comprehensive"
    },
    {
        id: 105,
        question: "An error occurs resulting in a $4,500 incorrect payment. What reporting is required?",
        options: [
            "Log in iTrak only (>$1,000)",
            "Notify Surveillance only (>$5,000 threshold not met)",
            "Log in iTrak; surveillance notification required only if >$5,000",
            "No reporting required - under $5,000"
        ],
        correct: 0,
        explanation: "Errors exceeding $1,000 must be logged in iTrak. Surveillance must be notified for disputes, system failures, or manual payouts exceeding $5,000. This error requires iTrak logging only. WPI 39.4, 6.2",
        type: "comprehensive"
    },
    {
        id: 106,
        question: "What is a 'Dummy Coup' in Baccarat and when is it used?",
        options: [
            "A practice coup for new dealers",
            "A procedural coup dealt without wagers to maintain card flow integrity",
            "A coup where all wagers are returned",
            "A void coup that doesn't count"
        ],
        correct: 1,
        explanation: "A Dummy Coup is a procedural coup dealt without wagers to maintain the integrity of the shoe's card flow, typically after an extra card must be preserved for the next coup. Bacc Rule 11.6, Scenario 2",
        type: "comprehensive"
    },
    {
        id: 107,
        question: "At Blackjack, an excess card is drawn to a completed dealer hand and the card is exposed. What happens to this card?",
        options: [
            "It becomes the next card from the shoe",
            "It is discarded (burned)",
            "It is added to the dealer's hand",
            "The hand is void"
        ],
        correct: 1,
        explanation: "If an excess card is drawn to a DEALER'S COMPLETED hand and is DISCLOSED (exposed), it is discarded. This is different from undisclosed excess cards. BJ Rule 17.3.1",
        type: "comprehensive"
    },
    {
        id: 108,
        question: "During Caribbean Stud Poker, one card is exposed to the DEALER'S hand during initial deal. What is the ruling?",
        options: [
            "Misdeal - void the round",
            "It becomes the dealer's designated face-up card - continue play",
            "Replace the exposed card",
            "Offer players option to retract"
        ],
        correct: 1,
        explanation: "Exception to exposed card rule: In Caribbean Stud, if ONE card is exposed to DEALER'S hand, it becomes their designated face-up card. Play continues. Poker Minor Rule 13.1.1",
        type: "comprehensive"
    },
    {
        id: 109,
        question: "The Continuous Shuffler Machine (CSM) malfunctions during a Blackjack hand and card order cannot be determined. What is the ruling?",
        options: [
            "Continue with manual shuffle",
            "Round is Void (but interim settlements like Insurance still stand)",
            "All bets push",
            "Dealer wins all hands"
        ],
        correct: 1,
        explanation: "If CSM fails or card order cannot be verified, the round is Void. However, interim settlements like Insurance and Pairs still stand. BJ Rule 17.12",
        type: "comprehensive"
    },
    {
        id: 110,
        question: "You must make a critical ruling at a Baccarat table. What is the correct order of priority for determining the outcome?",
        options: [
            "Electronic display → Physical cards → Surveillance footage",
            "Physical cards → Surveillance verification → Electronic display",
            "Surveillance footage → Physical cards → Electronic display",
            "Electronic display → Surveillance footage → Physical cards"
        ],
        correct: 1,
        explanation: "Always verify physical cards first (they are supreme), then use Surveillance for verification if needed. Electronic displays are aids only. Physical evidence is the foundation. Scenario 3, Module 6",
        type: "comprehensive"
    }
];
