// Training Data: Modules, Scenarios, and Quiz Questions
const trainingData = {
    modules: [
        {
            id: 1,
            title: "Module 1: Wager Management & Limit Violations",
            description: "Critical procedures for handling wagers that exceed table maximums, including multiple player scenarios and specialized calculations.",
            sections: [
                {
                    title: "1.1 General Principle (All Games)",
                    content: [
                        {
                            subtitle: "Discovery Time",
                            points: [
                                "<strong>Prior to Deal:</strong> Instruct players to reduce/retract wagers to the limit.",
                                "<strong>After Deal Commenced:</strong> The wager is paid or collected to the maximum only. Excess funds are returned to the player and are ignored for settlement. <span class='rule-reference'>BJ Rule 7.2.5</span> <span class='rule-reference'>Bacc Rule 7.2.5</span> <span class='rule-reference'>Roulette Rule 5.2.5</span>"
                            ]
                        },
                        {
                            subtitle: "Payout Order",
                            points: [
                                "When paying or passing chips, the highest denomination must be on top of the stack. <span class='rule-reference'>WPI 35.2</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "1.2 Blackjack: Multiple Players Over Max on One Box",
                    content: [
                        {
                            subtitle: "Situation",
                            points: [
                                "A seated player and back-bettors place chips on a single betting area, and the total exceeds the table maximum."
                            ]
                        },
                        {
                            subtitle: "Procedure (First Entitlement)",
                            procedure: [
                                "The player <strong>controlling the box</strong> (placing the wager nearest the Dealer) has first entitlement to wager up to the maximum.",
                                "If the controlling player wagers less than the maximum, second and subsequent entitlement goes to the remaining players (back-bettors) until the maximum is reached.",
                                "<strong>AM Action:</strong> Return the excess chips to the back-bettors first. If the controlling player alone exceeds the max, return their excess. <span class='rule-reference'>BJ Rule 6.6.1(d)</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "1.3 Baccarat: Side Wager Limits (Multiple Players)",
                    content: [
                        {
                            subtitle: "Situation",
                            points: [
                                "Multiple players place bets on a Side Wager (e.g., Pairs, Tiger), and the aggregate total exceeds the limit."
                            ]
                        },
                        {
                            subtitle: "Procedure (Priority Removal)",
                            procedure: [
                                "Request players voluntarily reduce wagers.",
                                "<strong>First Entitlement:</strong> Players who have placed a valid Main Wager (Player/Banker) have first entitlement to the Side Wager.",
                                "<strong>Removal Order:</strong> Remove/reduce wagers from players without a main wager first (Last In, First Out).",
                                "If the limit is still exceeded among players with main wagers, remove the last wager placed. <span class='rule-reference'>WPI 1.7</span> <span class='rule-reference'>Bacc Rule 6.6.5-6.6.7</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "1.4 Baccarat: Table Differential Exceeded (The Formula)",
                    content: [
                        {
                            subtitle: "Situation",
                            points: [
                                "The difference between the total Banker bets and total Player bets exceeds the allowable table differential."
                            ]
                        },
                        {
                            subtitle: "Procedure (If Result is Known)",
                            points: [
                                "You must calculate the <strong>Re-calculated Wager</strong> and pay/collect only on that amount."
                            ],
                            procedure: [
                                "<strong>Formula:</strong> (Excess Amount ÷ High Side Total) = Reduction Ratio",
                                "<strong>Apply:</strong> Multiply each individual wager on the High Side by the ratio",
                                "<strong>Rounding:</strong><br>• Amounts < $1,000: Round down to next $25<br>• Amounts > $1,000: Round down to next $100",
                                "<strong>Deduct:</strong> Subtract this rounded amount from the original bet to find the valid wager. <span class='rule-reference'>WPI 1.6.1</span>"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Module 2: Blackjack Irregularities",
            description: "Comprehensive procedures for handling card errors, dealing mistakes, and supply issues in Blackjack games.",
            sections: [
                {
                    title: "2.1 Card Handling Errors",
                    content: [
                        {
                            subtitle: "Burn Card Error",
                            points: [
                                "If the dealer fails to burn, results stand and play continues. <span class='rule-reference'>BJ Rule 17.1</span>"
                            ]
                        },
                        {
                            subtitle: "Exposed Card in Shoe",
                            points: [
                                "Discard (burn) the card. <span class='rule-reference'>BJ Rule 17.2</span>"
                            ]
                        },
                        {
                            subtitle: "Excess Card Drawn (The 'Undisclosed' Rule)",
                            points: [
                                "<strong>Undisclosed (Unseen):</strong> If a card is drawn in excess but not exposed, it is used as the next card from the shoe. <span class='rule-reference'>BJ Rule 17.3</span>",
                                "<strong>Disclosed (Seen):</strong> If drawn in excess to a Dealer's completed hand and exposed, it is discarded. <span class='rule-reference'>BJ Rule 17.3.1</span>"
                            ]
                        },
                        {
                            subtitle: "Dealer Missed First Card",
                            points: [
                                "The player currently making a decision may choose to:"
                            ],
                            procedure: [
                                "Complete their hand before the Dealer takes a card; OR",
                                "Instruct the Dealer to take a card before making further decisions. <span class='rule-reference'>BJ Rule 17.7</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "2.2 Deal & Placement Errors",
                    content: [
                        {
                            subtitle: "Deal to Empty Box (No Wager)",
                            points: [
                                "<strong>Initial Deal:</strong> Round is Void. Excess cards are burned. <span class='rule-reference'>BJ Rule 17.4</span>",
                                "<strong>Subsequent Deal:</strong> If a hand is dealt to a spot with no wager during the round, discard the hand. <span class='rule-reference'>BJ Rule 17.6</span>"
                            ]
                        },
                        {
                            subtitle: "Card Placement Error",
                            points: [
                                "If discovered before interim settlement or subsequent deal:",
                                "• AM may reconstruct the hand",
                                "• <strong>Crucial Step:</strong> Players must be given the option to retract their wager before full reconstruction. <span class='rule-reference'>BJ Rule 17.5</span>"
                            ]
                        },
                        {
                            subtitle: "No Cards to Valid Wager",
                            points: [
                                "The wager is Void.",
                                "<strong>Note:</strong> If they received only 1 card, they may retract or receive a second card. <span class='rule-reference'>BJ Rule 17.8</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "2.3 Player Decision Errors",
                    content: [
                        {
                            subtitle: "Dealer Fails to Act on Signal",
                            points: [
                                "If the Dealer ignores a player's signal (e.g., hits a Stand), subsequent cards dealt are considered excess/undisclosed and used for the next hand (per Rule 17.3). <span class='rule-reference'>BJ Rule 17.9</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "2.4 Supply & Machine Errors",
                    content: [
                        {
                            subtitle: "Insufficient Cards",
                            points: [
                                "Shuffle all cards in the discard rack, cut, and complete the round. <span class='rule-reference'>BJ Rule 17.11</span>"
                            ]
                        },
                        {
                            subtitle: "CSM Malfunction/Unverifiable Cards",
                            points: [
                                "If the order cannot be determined or CSM fails, the round is Void. (Interim settlements like Insurance/Pairs still stand). <span class='rule-reference'>BJ Rule 17.12</span>"
                            ]
                        },
                        {
                            subtitle: "Incorrect Deck (Foreign/Missing Cards)",
                            points: [
                                "• Past results Stand",
                                "• Current round is Void (money returned)",
                                "• Rest of shoe is Void. <span class='rule-reference'>BJ Rule 17.13</span>"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            title: "Module 3: Baccarat Irregularities",
            description: "Essential protocols for managing dealing errors, third card violations, and system discrepancies in Baccarat.",
            sections: [
                {
                    title: "3.1 Dealing Errors",
                    content: [
                        {
                            subtitle: "Failure to Burn",
                            points: [
                                "Results stand, play continues.",
                                "<strong>Exception:</strong> If discovered before the first coup is finished, you may reconstruct. <span class='rule-reference'>Bacc Rule 11.1</span>"
                            ]
                        },
                        {
                            subtitle: "Excess Card Drawn (Undisclosed)",
                            points: [
                                "Do not discard. It becomes the first card of the next coup (unless it is the last coup of the shoe). <span class='rule-reference'>Bacc Rule 11.2</span>"
                            ]
                        },
                        {
                            subtitle: "Wrong Hand (Swapped)",
                            points: [
                                "Move cards to the correct hand (Player/Banker). Draw extra cards if the Table of Play requires it. <span class='rule-reference'>Bacc Rule 11.3</span>"
                            ]
                        },
                        {
                            subtitle: "No Wagers Dealt",
                            points: [
                                "If dealt with no bets, it is a <strong>Dummy Coup</strong>. <span class='rule-reference'>Bacc Rule 11.4</span>"
                            ]
                        },
                        {
                            subtitle: "Card Face Up in Shoe",
                            points: [
                                "• If it's the first card of a coup: Deal as Dummy Coup",
                                "• If not the first card: Play continues normally. <span class='rule-reference'>Bacc Rule 11.5</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "3.2 Extra Card (Third Card) Errors",
                    content: [
                        {
                            subtitle: "If a 3rd card is dealt contrary to the Table of Play",
                            points: [
                                "<span class='rule-reference'>Bacc Rule 11.6</span>"
                            ]
                        },
                        {
                            subtitle: "Extra Card to Player Hand",
                            procedure: [
                                "<strong>If Banker needs a card:</strong> It becomes the Banker's 3rd card",
                                "<strong>If Banker must Stand:</strong> Settle the hand. The extra card becomes the first card of the next coup (deal next coup as Dummy)"
                            ]
                        },
                        {
                            subtitle: "Extra Card to Banker Hand",
                            points: [
                                "Settle the hand. The extra card becomes the first card of the next coup (deal next coup as Dummy)."
                            ]
                        }
                    ]
                },
                {
                    title: "3.3 Wrong Position/Delivery",
                    content: [
                        {
                            subtitle: "Situation",
                            points: [
                                "Cards dealt to wrong area or delivered to wrong player."
                            ]
                        },
                        {
                            subtitle: "AM Decision",
                            points: [
                                "You must choose one:"
                            ],
                            procedure: [
                                "Coup stands (all bets valid)",
                                "Coup stands (allow players to retract/reduce bets)",
                                "Declare Dummy Coup. <span class='rule-reference'>Bacc Rule 11.7</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "3.4 System & Shoe Errors",
                    content: [
                        {
                            subtitle: "Super Angel Eye Alerts",
                            points: [
                                "<strong>Bad Card Read:</strong> Contact Surveillance. Verify card order. If extra cards drawn, use for next coup (Dummy).",
                                "<strong>Dealing Error:</strong> Reset shoe. If cards match screen, result stands. <span class='rule-reference'>WPI 27.6</span>"
                            ]
                        },
                        {
                            subtitle: "Result Discrepancy",
                            points: [
                                "The <strong>Actual Cards</strong> always take precedence over the screen/shoe display.",
                                "If the actual result cannot be determined, the coup is Void. <span class='rule-reference'>Bacc Rule 11.15, 11.16</span>"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "Module 4: Roulette Irregularities",
            description: "Procedures for handling ball and wheel issues, including 'No Spin' declarations and SATG irregularities.",
            sections: [
                {
                    title: "4.1 Ball & Wheel Issues",
                    content: [
                        {
                            subtitle: "No Spin",
                            points: [
                                "The Dealer (or AM) must declare 'No Spin' if:"
                            ],
                            procedure: [
                                "The ball is spun out of the wheel",
                                "The ball does not complete 3 revolutions",
                                "The ball is caught in the rotor (floats)",
                                "A foreign object enters the wheel",
                                "The wheel stops rotating",
                                "A person interferes with the ball/wheel. <span class='rule-reference'>Roulette Rule 8.1</span>"
                            ]
                        },
                        {
                            subtitle: "Procedure",
                            points: [
                                "Attempt to stop the ball. If the ball falls into a number after 'No Spin' is called, the result is invalid.",
                                "Return all bets or allow them to remain for the next spin."
                            ]
                        }
                    ]
                },
                {
                    title: "4.2 Irregularities on SATG (Semi-Automated) Roulette",
                    content: [
                        {
                            subtitle: "Early Ball Drop",
                            points: [
                                "Dealer must declare 'No Spin'. If they fail to do so, and rules aren't breached, the result stands."
                            ]
                        },
                        {
                            subtitle: "Wrong Result Entered",
                            points: [
                                "AM must select 'Roll Back' on the display controller, swipe card, and enter the correct number. <span class='rule-reference'>WPI 54.2</span>"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 5,
            title: "Module 5: Poker Minors Irregularities",
            description: "Dealing errors, card count issues, and jackpot procedures for Caribbean Stud, Mississippi Stud, and Ultimate Texas Hold'em.",
            sections: [
                {
                    title: "5.1 Dealing Errors",
                    content: [
                        {
                            subtitle: "Exposed Cards (Initial Deal)",
                            points: [
                                "<strong>General Rule:</strong> If one or more cards are exposed before players look at their hands: <strong>Misdeal (Round Void)</strong>. <span class='rule-reference'>Poker Minor Rule 13.1</span>",
                                "<strong>Exception (Caribbean Stud):</strong> If one card is exposed to the Dealer's hand, it becomes their designated face-up card. <span class='rule-reference'>Poker Minor Rule 13.1.1</span>"
                            ]
                        },
                        {
                            subtitle: "Incorrect Card Count (During Deal)",
                            points: [
                                "<strong>Discovered Early:</strong> Misdeal (Round Void)",
                                "<strong>Discovered After Players Look:</strong>"
                            ],
                            procedure: [
                                "Hands with incorrect counts are Void",
                                "Offer other players the option to retract wagers",
                                "If a player retracts and had a Jackpot bet, refund it. <span class='rule-reference'>Poker Minor Rule 13.2</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "5.2 Dealer & Community Card Errors",
                    content: [
                        {
                            subtitle: "Incorrect Dealer/Community Cards",
                            points: [
                                "AM instructs Dealer to verify the count:"
                            ],
                            procedure: [
                                "<strong>If correct order determined:</strong> Continue (excess cards treated as undisclosed/next card)",
                                "<strong>If correct order cannot be determined:</strong> Misdeal (Round Void). <span class='rule-reference'>Poker Minor Rule 13.3</span>"
                            ]
                        },
                        {
                            subtitle: "Dealer Exposes Hand Early",
                            points: [
                                "The round continues. Players who haven't acted yet are given the opportunity to do so. <span class='rule-reference'>Poker Minor Rule 13.5</span>"
                            ]
                        }
                    ]
                },
                {
                    title: "5.3 Jackpot Irregularities",
                    content: [
                        {
                            subtitle: "Misdeal",
                            points: [
                                "If a round is a Misdeal, <strong>Jackpot wagers remain valid for the next round</strong>.",
                                "If a player leaves, refund the Jackpot wager. <span class='rule-reference'>Poker Minor Rule 13.9</span>"
                            ]
                        },
                        {
                            subtitle: "Game Void (Deck Error)",
                            points: [
                                "If an incorrect deck (e.g., missing card) is found during play, the round is Void.",
                                "Jackpot wagers follow Rule 13.9. <span class='rule-reference'>Poker Minor Rule 13.6</span>"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 6,
            title: "Module 6: Area Manager Checklist",
            description: "Essential procedures and responsibilities for effective incident management on the gaming floor.",
            sections: [
                {
                    title: "Critical Action Steps",
                    content: [
                        {
                            subtitle: "1. Stop the Action",
                            points: [
                                "Do not let the dealer proceed until you have assessed the physical evidence (cards, chips)."
                            ]
                        },
                        {
                            subtitle: "2. Verify the Cards",
                            points: [
                                "In Baccarat and Blackjack, the <strong>physical cards always overrule the electronic display</strong>."
                            ]
                        },
                        {
                            subtitle: "3. Check for 'Next Coup'",
                            points: [
                                "In Baccarat and Blackjack, if the next round has already started, previous results generally stand (cannot be reversed). <span class='rule-reference'>Bacc Rule 11.10</span> <span class='rule-reference'>BJ Rule 17.9.1</span>"
                            ]
                        },
                        {
                            subtitle: "4. Reporting",
                            points: [
                                "Log any error > $1,000 in iTrak",
                                "Notify Surveillance of any disputes, system failures, or manual payouts > $5,000. <span class='rule-reference'>WPI 39.4, 6.2</span>"
                            ]
                        },
                        {
                            subtitle: "5. Disputes",
                            points: [
                                "Your decision is final on the floor.",
                                "If the guest is unsatisfied, you must advise them of their right to contact the NICC Inspector."
                            ]
                        }
                    ]
                }
            ]
        }
    ],

    scenarios: [
        {
            id: 1,
            title: "The High-Stakes Blackjack Overbet",
            subtitle: "Managing wager limits with multiple players on a single box",
            setting: "Imagine a busy Friday night. At a high-stakes Blackjack table with a clearly posted $5,000 maximum bet, a new hand is about to begin. A seated player, who is 'controlling' the box, places a large wager. Two other players, standing behind him, add their own chips to the same box as 'back-bettors.'",
            incident: "The dealer totals the wagers on the single box and realizes the aggregate amount is $7,000—a full $2,000 over the table maximum. The dealer hesitates, unsure of the correct protocol for reducing the bet across three different players. Seeing the pause, one of the back-bettors insists, 'My money was down first, it should play.' The action at the table halts. The dealer correctly follows procedure and calls for an Area Manager.",
            resolution: {
                title: "Area Manager's Assessment and Resolution",
                intro: "Your response must be immediate, calm, and procedurally exact.",
                steps: [
                    "<strong>Stop the Action:</strong> Your first action is to verify that play is paused prior to the deal commencing. This fact dictates your entire course of action.",
                    "<strong>Identify Entitlement:</strong> Apply the 'first entitlement' principle as defined by BJ Rule 6.6.1(d). You identify the player 'controlling the box,' which is the individual whose wager is physically placed in the betting area closest to the Dealer's side of the table.",
                    "<strong>Execute the Reduction:</strong> Calmly and clearly explain the procedure to all three players. The controlling player has the first right to wager up to the $5,000 table maximum. If their wager is less than the maximum, the back-bettors can then contribute up to the limit.",
                    "<strong>Final Action:</strong> In this case, the controlling player wishes to bet the full maximum. You instruct the dealer to return the excess $2,000 in chips to the back-bettors first. Wagers are reduced from the outside-in, preserving the controlling player's primary right to the betting box and creating a clear, defensible order of operations. Once the total wager is confirmed to be exactly $5,000, you signal the dealer to continue."
                ]
            },
            keyPrinciples: [
                "<strong>First Entitlement:</strong> The player controlling the box always has the first right to the wager limit. Back-bettors can only supplement a wager up to the maximum.",
                "<strong>Discovery Time is Key:</strong> Your first mental question must always be: 'Did cards leave the shoe?' The answer dictates your entire course of action. Because the error was caught before the deal, the procedure is a simple wager reduction. Had it been discovered after, the 'paid or collected to the maximum' rule (BJ Rule 7.2.5) would have applied.",
                "<strong>Clear Communication:</strong> Your calm, rule-based explanation is essential for de-escalating potential disputes and demonstrating professional control."
            ]
        },
        {
            id: 2,
            title: "The Baccarat Third-Card Error",
            subtitle: "Correcting card delivery errors according to the Table of Play",
            setting: "The setting is a Baccarat table during a tense coup. The initial two-card hands have resulted in a Player total of 4 and a Banker total of 5. Following the Table of Play, the dealer has just correctly drawn and delivered a third card to the Player hand.",
            incident: "After correctly giving the Player hand its required third card, the dealer has a momentary lapse and incorrectly draws another card, placing it on the Banker's hand. According to the Table of Play, the Banker's total of 5 requires it to stand against the Player's third card. An experienced player immediately points out the error: 'Banker stands on 5, that card shouldn't be there!' The dealer freezes, and you are called to the table.",
            resolution: {
                title: "Area Manager's Assessment and Resolution",
                intro: "Your response must be methodical, referencing the specific Baccarat irregularity rules to restore the integrity of the coup.",
                steps: [
                    "<strong>Verify the State of Play:</strong> First, confirm the initial totals (Player 4, Banker 5) and the Player's third card. You will consult the Table of Play to verify that the Banker hand was, in fact, required to stand. This confirms the card was dealt in error.",
                    "<strong>Apply the Correct Rule:</strong> You will now apply Bacc Rule 11.6. This rule explicitly states that since the Banker must Stand, the erroneously dealt card cannot be part of the Banker's hand.",
                    "<strong>Execute the Procedure:</strong> Instruct the dealer to settle all wagers based on the valid, completed hands: the Player's three-card total versus the Banker's original two-card total of 5.",
                    "<strong>Handle the Excess Card:</strong> Address the critical next step from Bacc Rule 11.6. Instruct the dealer to place the extra card to the side. Announce to the table that this card will become the first card of the next coup.",
                    "<strong>Ensure Future Integrity:</strong> To finalize the correction, instruct the dealer that the next round must be dealt as a 'Dummy Coup' as per the rule. This procedural coup, dealt without wagers, corrects the flow of cards from the shoe."
                ]
            },
            directorNote: "A 'Dummy Coup' can confuse new players. Announce it clearly and confidently: 'Ladies and gentlemen, to ensure the integrity of the shoe, we will now deal one procedural hand without wagers before resuming play.' This transparency prevents suspicion and reinforces your control.",
            keyPrinciples: [
                "<strong>Rule Specificity:</strong> Baccarat's third-card rules are highly specific. The procedure depends entirely on whether the receiving hand needed a card or must stand. There is no room for interpretation.",
                "<strong>The Dummy Coup Mandate:</strong> The 'Dummy Coup' is not an optional reset; it is the required procedural consequence of preserving an excess card for the next hand, as mandated by rules like Bacc Rule 11.2 and 11.6. One action necessitates the other to maintain the shoe's integrity."
            ]
        },
        {
            id: 3,
            title: "The System vs. Reality Discrepancy",
            subtitle: "When technology conflicts with physical evidence",
            setting: "A Baccarat coup concludes. The large electronic display, fed by the intelligent shoe, clearly shows the result: Banker wins 7 over Player 6. Following this display, the dealer begins to pay the winning Banker wagers.",
            incident: "As the dealer is mid-payout, a player who bet on Player loudly objects, 'Wait! Look at the cards! The Player hand is the winner!' he exclaims, pointing at the felt. Almost simultaneously, the Super Angel Eye system flashes a 'Bad Card Read' alert on the dealer's terminal. The table is now in dispute. The electronic display shows one result, the player claims another, and the system has flagged an error. You are called to resolve the discrepancy.",
            resolution: {
                title: "Area Manager's Assessment and Resolution",
                intro: "Your approach must be systematic, transparent, and grounded in our foundational rules.",
                steps: [
                    "<strong>Stop All Action:</strong> Your immediate instruction is to halt all payouts and chip movements. Nothing proceeds until the dispute is resolved.",
                    "<strong>Invoke the Primary Principle:</strong> You will authoritatively state the foundational rule that governs all such situations: The Actual Cards on the table always take precedence over any electronic display (Bacc Rule 11.15). This immediately establishes the framework for your investigation.",
                    "<strong>Verify the Evidence:</strong> Step up to the table and carefully examine the physical cards laid out in their respective boxes. Confirm that the player was correct and the physical cards show a result different from the screen.",
                    "<strong>System Error Protocol:</strong> Follow the procedure from WPI 27.6. Contact Surveillance, report the 'Bad Card Read' and the dispute, and ask them to verify the card order from the shoe.",
                    "<strong>Final Ruling:</strong> Surveillance confirms the physical cards on the table are correct. Announce the official result based on the physical cards. Instruct the dealer to correct the payouts—taking back any incorrect payments and paying the winning Player wagers. Ensure the screen result is manually corrected before the next coup begins."
                ]
            },
            keyPrinciples: [
                "<strong>Physical Evidence is Supreme:</strong> The absolute, non-negotiable rule is that physical cards determine the outcome. Electronic displays are aids, not arbiters.",
                "<strong>Follow Reporting Protocols:</strong> Any system failure, especially one leading to a dispute, must be logged and reported to Surveillance as per WPI 6.2.",
                "<strong>Protect Game Integrity:</strong> By stopping the game and systematically verifying the facts, you prevent a significant financial error and uphold the integrity of the game."
            ]
        },
        {
            id: 4,
            title: "The Poker Misdeal & Jackpot Complication",
            subtitle: "Managing ancillary wagers during a misdeal situation",
            setting: "The scene is a five-player Caribbean Stud Poker table. All five players have placed their Ante wager and the optional Jackpot wager. The dealer begins the initial deal.",
            incident: "The dealer accidentally deals one player six cards and another only four. Critically, the error is not discovered until after all cards are dealt and two players with the correct number of cards have already looked at their hands. A player with an incorrect card count calls attention to the error. The remaining players are now confused, asking if the hand is dead and what happens to their Jackpot bets. The dealer calls you for a ruling.",
            resolution: {
                title: "Area Manager's Assessment and Resolution",
                intro: "This situation requires a multi-step resolution that addresses each player's hand and wagers individually.",
                steps: [
                    "<strong>Confirm the Timeline:</strong> Your first question is to establish that the error was discovered after some players had looked at their hands. This fact is the critical trigger for the specific procedure you must follow.",
                    "<strong>Apply the Correct Rule:</strong> Invoke Poker Minor Rule 13.2, which governs incorrect card counts discovered after players have viewed their hands.",
                    "<strong>Void Invalid Hands:</strong> Declare that the two hands with an incorrect number of cards are Void. Instruct the dealer to return the Ante and Jackpot wagers to these two players.",
                    "<strong>Offer Options to Valid Hands:</strong> For the remaining three players with correct hands, you must approach them individually. Offer each player the option to either retract their wagers (both Ante and Jackpot) or to continue with the hand.",
                    "<strong>Managing the Jackpot:</strong> For any player who chooses to continue, you must clearly explain the protocol from Poker Minor Rule 13.9: because the round is a Misdeal, their Jackpot wagers remain valid and will carry over to the next round of play. If a player retracts their wagers and leaves the table, their Jackpot bet must be refunded."
                ]
            },
            directorNote: "It is crucial to address each player with a valid hand individually. Do not make a group announcement. Approaching each player one-on-one shows respect for their individual stake in the game and prevents one unhappy player from influencing the entire table.",
            keyPrinciples: [
                "<strong>The 'After Looking' Distinction:</strong> The procedure for a dealing error changes dramatically depending on whether it is found before or after players have seen their cards.",
                "<strong>Player Choice is Paramount:</strong> In this situation, players with valid hands must be given the option to retract their bets. The decision cannot be made for them.",
                "<strong>Jackpot Bet Protocol:</strong> The rule that Jackpot bets carry over to the next hand in a Misdeal is a critical piece of information. Communicating this clearly prevents disputes and ensures players are treated fairly."
            ]
        }
    ],

    coreprinciples: [
        {
            principle: "Control the Environment",
            directive: "Stop all action and payments instantly. Nothing proceeds until you have verified the physical evidence."
        },
        {
            principle: "Evidence Overrules Technology",
            directive: "Always verify the physical cards. They are the final arbiter in any discrepancy with electronic systems."
        },
        {
            principle: "Adhere to the Point of No Return",
            directive: "Confirm if the subsequent round has begun. Once the next hand is in play, the previous result is locked. You cannot go back."
        },
        {
            principle: "Maintain a Formal Record",
            directive: "Log significant errors (>$1,000) in iTrak. Notify Surveillance of major disputes or payouts (>$5,000)."
        },
        {
            principle: "Uphold Player Rights",
            directive: "Your decision is final on the floor. If a guest remains unsatisfied, you have a duty to inform them of their right to contact the NICC Inspector."
        }
    ]
};
