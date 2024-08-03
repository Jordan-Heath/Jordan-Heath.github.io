//source: https://aqiu384.github.io/p5r-walkthrough/ace-walkthrough
const guideData = {
	"April": {
		"4/9 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/10 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/11 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/12 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Villains.\" <strong>(Knowledge +2)</strong></li>\n<li><strong>Musical notes shown during stat gains are not the actual point value</strong></li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Actual Stat Gains</th>\n<th>Displayed Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3 or 4</td>\n<td>2</td>\n</tr>\n<tr>\n<td>5, 7, or 10</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>Chariot Rank 1 <strong>(Auto)</strong></li>\n</ul>\n"
		},
		"4/13 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/14 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/15 Friday": {
			"Class": "<ul>\n<li>Lovers Rank 1 <strong>(Auto)</strong></li>\n</ul>\n"
		},
		"4/16 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"4/17 Sunday": {
			"Evening": "<ul>\n<li>Crafting Tutorial <strong>(Proficiency +3)</strong></li>\n<li><strong>Musical notes shown during stat gains are not the actual point value</strong></li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Actual Stat Gains</th>\n<th>Displayed Notes</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>2</td>\n<td>1</td>\n</tr>\n<tr>\n<td>3 or 4</td>\n<td>2</td>\n</tr>\n<tr>\n<td>5, 7, or 10</td>\n<td>3</td>\n</tr>\n</tbody>\n</table>\n"
		},
		"4/18 Monday": {
			"Daytime": "<ul>\n<li>Talk to librarian in Shujin library, Borrow \"Pirate Legend\"</li>\n<li>Buy DVD Player <strong>(Y2500)</strong> from Yongen-Jaya recycling shop</li>\n<li>Buy crafting materials from recycling shop</li>\n<li>Talk to Takemi in her Yongen-Jaya clinic, Death Rank 1 <strong>(Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with the crossword on innermost booth of Leblanc, Complete blue squares: \"Semesters\" <strong>(Knowledge +2)</strong></li>\n<li>Clean your room <strong>(Obtain \"Yoncha Wanderer\" and \"Social Thought\")</strong></li>\n</ul>\n"
		},
		"4/19 Tuesday": {
			"Class": "<ul>\n<li>Question: \"They're the same.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Buy Bio Nutrients <strong>(Y1200)</strong> from flower shop in Shibuya underground mall</li>\n<li>Talk to Ryuji outside 2D classroom, Chariot Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 1: \"I'm counting on you.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Do you go want to go back?\" (+2)</li>\n<li>(Phone) Choice 3: \"It's never too late, man.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with plant in your room, Feed it Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"4/20 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Train": "<p>Read \"Pirate Legend\"</p>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Castle Palace</strong></li>\n<li><strong>Always carry matching arcana for confidant events from here on out</strong></li>\n<li><strong>Need to obtain Hierophant, Lovers, Chariot, and Death personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with middle booth, Study at Leblanc <strong>(Knowledge +5)</strong></li>\n</ul>\n"
		},
		"4/21 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Interact with study booths in Shujin library, Study at library <strong>(Knowledge +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Sojiro inside Leblanc, Hierophant Rank 1</li>\n</ul>\n"
		},
		"4/22 Friday": {
			"Daytime": "<ul>\n<li>Sign up for Triple Seven convenience store job from part-time listings in Shibuya underground walkway</li>\n<li>Work at convenience store on Shibuya central street <strong>(Charm +3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 2 <strong>(Kindness +3)</strong><ol>\n<li>Choice 1: \"Making coffee.\" (+2)</li>\n<li>Choice 2: \"That guy seemed suspicious.\" (+2)</li>\n<li>Choice 1: \"I want the ladies to love me.\" (+2)</li>\n<li>(Phone) Choice 1: \"Got it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"4/23 Saturday": {
			"Class": "<ul>\n<li>Question: \"All of them.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Study at library <strong>(Guts +2, Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Brew coffee with matching arcana <strong>(Charm +2)</strong> <strong>(Hierophant +1)</strong></li>\n</ul>\n"
		},
		"4/24 Sunday": {
			"Daytime": "<ul>\n<li>Drink Aojiru <strong>(Y5000)</strong> for Y5,000 at Shibuya underground platform <strong>(Charm +2)</strong> <strong>(Charm Lv. 2)</strong></li>\n<li>Sign up for Rafflesia flower shop job from part-time listings in Shibuya underground walkway <strong>(Requires Charm Lv. 2)</strong></li>\n<li>Work at flower shop in Shibuya underground mall <strong>(Kindness +3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit bathhouse outside Leblanc <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"4/25 Monday": {
			"Train": "<ul>\n<li>Finish reading \"Pirate Legend\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question with matching arcana: \"You unquestioningly support it.\" and \"You have a duty to correct it.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Alluring Dancer\" from library</li>\n<li>Buy rental membership <strong>(Y4800)</strong> from DVD store on Shibuya central street</li>\n<li>Borrow \"X-Folders\" from DVD store</li>\n<li>Work at flower shop <strong>(Kindness +5)</strong> <strong>(Kindness Lv. 2)</strong><ol>\n<li>Create a bouquet that satisfies the customer's request</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 3<ol>\n<li>Choice 1: \"Medium-fine.\" (+2)</li>\n<li>Choice 2: \"Is it trouble?\" (+2)</li>\n<li>(Phone) Choice 3: \"Thank you in advance.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"4/26 Tuesday": {
			"Daytime": "<ul>\n<li>Study at library <strong>(Guts +2, Knowledge +2)</strong> <strong>(Guts Lv. 2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with TV in your room, Watch \"X-Folders\" <strong>(Guts +3)</strong></li>\n</ul>\n"
		},
		"4/27 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Four color theorem.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Blossom\" <strong>(Knowledge +2)</strong></li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"4/28 Thursday": {
			"Daytime": "<ul>\n<li><strong>Clear Castle Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Finish watching \"X-Folders\" <strong>(Guts +3)</strong></li>\n</ul>\n"
		},
		"4/29 Friday": {
			"Daytime": "<ul>\n<li>Borrow \"Wraith\" from DVD store</li>\n<li>Chariot Rank 3<ol>\n<li>Choice 1: \"Let's not fight.\" (+2)</li>\n<li>Choice 1: \"Calm down, Ryuji.\" (+3)</li>\n<li>(Phone) Choice 1: \"I can't exactly blame you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"4/30 Saturday": {
			"Train": "<p>Read \"The Alluring Dancer\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Wonder.\", \"Child.\", and \"A prodigy.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Watch movies in Shibuya <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 2)</strong></li>\n</ul>\n"
		}
	},
	"May": {
		"5/1 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Buy Bio Nutrients x3 <strong>(Y3600)</strong> from Shibuya flower shop</li>\n<li>Death Rank 2 <strong>(Requires Guts Lv. 2)</strong> <strong>(Guts +2)</strong><ol>\n<li>Choice 1: \"I have a bad heart.\" (+2)</li>\n<li>Choice 1: \"I agree.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'm totally fine.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Bathhouse <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"5/2 Monday": {
			"Evening": "<ul>\n<li>Crossword: \"Golden\" <strong>(Knowledge +2)</strong></li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong> <strong>(Knowledge Lv. 2)</strong></li>\n</ul>\n"
		},
		"5/3 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"Wraith\" <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"5/4 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/5 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Finish watching \"Wraith\" <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"5/6 Friday": {
			"Class": "<ul>\n<li>Lecture <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 1 (No Persona Needed) <strong>(Auto)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>By all books including \"Buchiko's Story\" from Shibuya bookstore</li>\n<li>Borrow \"Bubbly Hills, 90210\" from DVD store</li>\n<li>Lovers Rank 2 <strong>(Requires Kindness Lv. 2)</strong><ol>\n<li>Choice 2: \"She's so strong.\" (+3)</li>\n<li>Choice 2: \"You might be right.\" (+3)</li>\n<li>Choice 2: \"I couldn't just ignore you.\" (+3)</li>\n<li>Choice 2: \"Let's find it together.\" (+3)</li>\n<li>(Phone) Choice 2: \"Leave it to me.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sign up for Ore no Beko beef bowl job from part-time listings in Shibuya underground walkway</li>\n<li>Work at beef bowl <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/7 Saturday": {
			"Class": "<ul>\n<li>Question: \"Fatal woman.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/8 Sunday": {
			"Class": "<ul>\n<li>Moon Rank 2 (No Persona Needed) <strong>(Auto)</strong><ol><li>-</li><li>Choice 2: \"You've done good, kid.\"</li><li>Choice 2: \"Sounds Cool.\"</li><li>Choice 1: \"Nice hustle, image manager.\"</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +2)</strong></li>\n<li>Work at beef bowl <strong>(Proficiency +5)</strong><ol>\n<li>Correctly memorize all orders</li><li><textarea placeholder=\"Write orders here\"></textarea></li></ol></li>\n</ul>\n"
		},
		"5/9 Monday": {
			"Daytime": "<ul>\n<li>Request \"The Bark and Bite of a Bully\" unlocked</li>\n<li>Death Rank 3 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"I don't mind.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course not.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Lovers Hangout Study-5/9 <strong>(Knowledge +5)</strong><ol>\n<li>Choice 1: \"I think so.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/10 Tuesday": {
			"Class": "<ul>\n<li>Question: \"The Heian Period.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Lovers Rank 3 <strong>(Inokashira unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Can we stop yet?\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Has that happened to you?\" (+3)</li>\n<li>Choice 2: \"That freedom sounds nice.\" (+2)</li>\n<li>(Phone) Choice 1: \"Could be.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Malaise\" <strong>(Knowledge +2)</strong></li>\n<li>Chariot Hangout Study-5/10 <strong>(Knowledge +5)</strong><ol>\n<li>Choice 1: \"Try starting over.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/11 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Minamoto no Yoshitsune.\", \"Minamoto no Yoritomo.\", \"Yoritomo won.\", and \"The weak.\"</li>\n</ul>\n"
		},
		"5/12 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Cognition.\" and \"Both.\"</li>\n</ul>\n"
		},
		"5/13 Friday": {
			"All Day": "<ul>\n<li>Exams: \"The Devil's Dictionary.\" and \"Femme Fatale.\"</li>\n<li>Councillor Rank 1 <strong>(Auto)</strong></li>\n<li>Councillor Rank 2 <strong>(Auto)</strong> <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 2: \"We made a deal.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"But it sounds right.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Well, okay.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"5/14 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"Bubbly Hills, 90210\" <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"5/15 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/16 Monday": {
			"Class": "<ul>\n<li>Question: \"The placebo effect.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"5/17 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/18 Wednesday": {
			"Daytime": "<ul>\n<li>Death Rank 4 <strong>(Guts +2)</strong><ol>\n<li>Choice 2: \"Dr. Takemi will help.\" (+2)</li>\n<li>Choice 1: \"You seem happy.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll reflect on my mistakes.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Gallery\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Yoshida outside Shibuya station, Sunday Rank 0.1</li>\n</ul>\n"
		},
		"5/19 Thursday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Hokusai Katsushika.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Visit diner on Shibuya central street, Order Surprise Sando at diner <strong>(Knowledge +3, Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with downstairs TV in Leblanc, TV Quiz: \"Using noise to cause distress.\" <strong>(Knowledge +2)</strong></li>\n<li>Bathhouse <strong>(Charm +3, Guts +2)</strong></li>\n</ul>\n"
		},
		"5/20 Friday": {
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +3)</strong></li>\n<li>Talk to Justine in Velvet Room, Strength Rank 1</li>\n<li><strong>Strength confidant can be continued anytime before 12/24</strong></li>\n<li><strong>Reach barrier in Museum Palace</strong></li>\n<li><strong>Need free slot in stock to unlock \"The Purpose of a Thief\" when recruiting Regent during scripted encounter</strong> </li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/21 Saturday": {
			"Train": "<ul>\n<li>Finish reading \"The Alluring Dancer\" <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"1:1.414\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Unlock barrier in Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Finish watching \"Bubbly Hills, 90210\" <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"5/22 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +2)</strong></li>\n<li>Chariot Rank 4<ol>\n<li>Choice 2: \"Are you worried about him?\" (+2)</li>\n<li>Choice 1: \"But you're doing great.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Bathhouse <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"5/23 Monday": {
			"Class": "<ul>\n<li>Question: \"Together.\", \"Senses.\", and \"Senses coming together.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"5/24 Tuesday": {
			"Train": "<p>Read \"Buchiko's Story\"</p>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"5/25 Wednesday": {
			"Daytime": "<ul>\n<li><strong>Clear Museum Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/26 Thursday": {
			"Class": "<ul>\n<li>Question: \"Arthur Conan Doyle.\" <strong>(Knowledge +2)</strong> <strong>(Knowledge Lv. 3)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Gallant Rogue\" from library</li>\n<li>Request \"If Cats Disappeared from the City\" flag</li>\n<li>Investigate Yongen-Jaya by talking with residents to ID target <strong>(Request \"The Cat's Disappearance\" unlocked)</strong></li>\n<li>Chariot Rank 5<ol>\n<li>Choice 2: \"Protein powder?\" (+3)</li>\n<li>Choice 1: \"You seem conflicted.\" (+2)</li>\n<li>Choice 2: \"So he's an asshole?\" (+3)</li>\n<li>(Phone) Choice 1: \"Don't worry. I gotcha.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Pollenosis\" <strong>(Knowledge +2)</strong></li>\n<li>TV Quiz: \"Queen of evidence.\" <strong>(Knowledge +2)</strong></li>\n<li>Sun Rank 1 (No Persona Needed)</li>\n</ul>\n"
		},
		"5/27 Friday": {
			"Daytime": "<ul>\n<li>Death Rank 5 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"That's good.\" (+3)</li>\n<li>(Phone) Choice 1: \"About Miwa-chan?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Mishima on Shibuya central street to start Operation Maidwatch, Temperance Rank 0.1<ol>\n<li>Choice 3: \"You're a genius, Ryuji!\" (Chariot +3)</li></ol></li>\n</ul>\n"
		},
		"5/28 Saturday": {
			"Daytime": "<ul>\n<li>Talk to Kawakami in Shujin hallways and help her out</li>\n<li>Lovers Rank 4<ol>\n<li>Choice 1: \"I know what you mean.\" (+3)</li>\n<li>Choice 2: \"That's hilarious.\" (+3)</li>\n<li>Choice 1: \"Tell me.\" (+3)</li>\n<li>Choice 1: \"Good idea.\" (+3)</li>\n<li>Choice 3: \"Good luck with that.\" (+3)</li>\n<li>(Phone) Choice 1: \"I train everyday.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit Big Bang Burger on Shibuya central street, Big Bang Challenge <strong>(Charm +2, Proficiency +2, Guts +2, Knowledge +2)</strong> <strong>(Guts Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/29 Sunday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Harajuku<ol>\n<li>-</li>\n<li>Choice 3: \"Kinda want to try it.\" (+3) (Lovers +3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Chariot Hangout Movies <strong>(Kindness +5)</strong><ol>\n<li>Choice 1: \"They do.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"5/30 Monday": {
			"Class": "<ul>\n<li>Faith Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Interact with payphone in Leblanc, Temperance Rank 1 <strong>(Y5000)</strong> <strong>(Requires Guts Lv. 3)</strong></li>\n</ul>\n"
		},
		"5/31 Tuesday": {
			"Class": "<ul>\n<li>Question: \"John Silver.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Mementos Palace</strong><ol>\n<li>The Bark and Bite of a Bully</li>\n<li>If Cats Disappeared from the City</li></ol></li>\n<li><strong>Need to obtain Emperor, Justice, Temperance, and Councillor personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Japanese\" <strong>(Knowledge +2)</strong></li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		}
	},
	"June": {
		"6/1 Wednesday": {
			"Daytime": "<ul>\n<li>Chariot Rank 6<ol>\n<li>Choice 3: \"We can train at my place.\" (+3)</li>\n<li>Choice 1: \"You guys should trust Nakaoka.\" (+3)</li>\n<li>Choice 1: \"Absolutely.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"So he should've punched back?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Mishima on Shibuya central street, Moon Rank 3 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/2 Thursday": {
			"Daytime": "<ul>\n<li>Request \"One Who Bullies Bullies\" flag</li>\n<li>Investigate Shujin gates <strong>(Request \"One Who Bullies Bullies\" unlocked)</strong></li>\n<li>Death Rank 6 <strong>(Guts +2)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"It suits you.\" (+3)</li>\n<li>(Phone) Choice 1: \"You can count on me.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Probation officers are unpaid.\" <strong>(Knowledge +2)</strong></li>\n<li>Big Bang Challenge <strong>(Charm +3, Proficiency +3, Guts +3, Knowledge +3)</strong></li>\n</ul>\n"
		},
		"6/3 Friday": {
			"Train": "<ul>\n<li>Finish reading \"Buchiko's Story\" <strong>(Kindness +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Read \"The Gallant Rogue\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Councillor Rank 3<ol>\n<li>Choice 1: \"So they have, huh?\" (+2)</li>\n<li>Choice 1: \"Of course.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"It's a seed for new love.\" (+2)</li>\n<li>Choice 1: \"Did that help?\" (+2)</li>\n<li>(Phone) Choice 1: \"Good work over there.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Master\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 2 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"It does.\" (+2)</li>\n<li>Choice 2: \"Absolutely not!\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"Uh, what the hell?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/4 Saturday": {
			"Class": "<ul>\n<li>Question: \"The halo effect.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Order Surprise Sando at diner <strong>(Knowledge +3, Guts +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Rank 3 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Yeah, they do.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"I'll request you more often.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Thanks.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/5 Sunday": {
			"Daytime": "<ul>\n<li>Visit Kichijoji info stand, Ask the receptionist every question <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"An Elderly's Meaning of Life\" flag</li>\n<li>Investigate Kichijoji <strong>(Request \"An Elderly's Meaning of Life\" unlocked)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Charm +2)</strong></li>\n<li>Sun Rank 2 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"6/6 Monday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Request \"Sadism Is Just a Sign of Love\" unlocked</li>\n<li>Buy Imported Protein from sports shop in Shibuya underground mall</li>\n<li>Councillor Rank 4<ol>\n<li>-</li>\n<li>Choice 1: \"I know, right?\" (+3)</li>\n<li>Choice 3: \"Is that what you're researching?\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"That's a grand plan.\" (+2)</li>\n<li>Choice 1: \"That sounds fun.\" (+3)</li>\n<li>(Phone) Choice 1: \"I feel completely fine.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Bio Nutrients <strong>(Kindness +3)</strong></li>\n<li>Talk to Justine outside Velvet Room, Strength Hangout Big Bang Burger</li>\n</ul>\n"
		},
		"6/7 Tuesday": {
			"Class": "<ul>\n<li>Question: \"The number of legs.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Work at convenience store <strong>(Charm +5)</strong> <strong>(Charm Lv. 3)</strong><ol>\n<li>Handle the queue efficiently</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Conference\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Movie Theater</li>\n</ul>\n"
		},
		"6/8 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Controlling public thought.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Respond to Kasumi's message, Faith Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 1: \"We're just getting started.\" (+2)</li>\n<li>Choice 1: \"Next time, then.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Impressive.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 4 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/9 Thursday": {
			"Evening": "<ul>\n<li>Play billiards in Kichijoji <strong>(Random Stat +3)</strong></li>\n</ul>\n"
		},
		"6/10 Friday": {
			"Class": "<ul>\n<li>Justice Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Hangout</li>\n</ul>\n"
		},
		"6/11 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"6/12 Sunday": {
			"Daytime": "<ul>\n<li>Request \"Part-time Job, Full-time Hell\" unlocked</li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Buy \"Expert Billiards\" and Jump Cue <strong>(Y51500)</strong> from sports shop</li>\n<li>Lovers Rank 5<ol>\n<li>Choice 2: \"Give it up.\" (+2)</li>\n<li>Choice 2: \"She's amazing, huh\u2026\" (+2)</li>\n<li>Choice 1: \"It had grace.\" (+2)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to masked man in Kichijoji's back alleys, Trade Imported Protein for Decorative Whip</li>\n<li>Sun Rank 3 (No Persona Needed)</li>\n</ul>\n"
		},
		"6/13 Monday": {
			"Class": "<ul>\n<li>Question: \"Green.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Talk to Akechi outside the Kichijoji darts club, Justice Rank 2<ol>\n<li>Choice 1: \"You always seem so busy.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Shoot very carefully.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"I see a lot of things.\" (+3)</li>\n<li>(Phone) Choice 3: \"As rivals?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/14 Tuesday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Bathhouse <strong>(Charm +3, Guts +2)</strong></li>\n</ul>\n"
		},
		"6/15 Wednesday": {
			"Train": "<ul>\n<li>Finish reading \"Expert Billiards\" <strong>(Technical Lv. 1)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Coins.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 4 <strong>(Y5000)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"How rude.\" (+2)</li>\n<li>Choice 3: \"You need to love yourself.\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"6/16 Thursday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Wardrobe\" <strong>(Knowledge +2)</strong></li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 2)</strong></li>\n</ul>\n"
		},
		"6/17 Friday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 5 <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"It's fun.\" (+2)</li>\n<li>Choice 1: \"How terrible\u2026\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"You want some?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/18 Saturday": {
			"Daytime": "<ul>\n<li>Request \"Phantom Thieves VS Burglary Ring\" unlocked</li>\n<li>Talk to Yusuke in Shibuya underground walkway, Emperor Rank 1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong> <strong>(Knowledge Lv. 4)</strong></li>\n</ul>\n"
		},
		"6/19 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Study at Leblanc <strong>(Knowledge +3)</strong></li>\n</ul>\n"
		},
		"6/20 Monday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"Smartphone.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/21 Tuesday": {
			"Daytime": "<ul>\n<li>Councillor Rank 5<ol>\n<li>Choice 1: \"This looks great!\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"You know, you're right.\" (+3)</li>\n<li>Choice 2: \"Hey, as long as it tastes good.\" (+2)</li>\n<li>Choice 2: \"I guess so.\" (+2)</li>\n<li>(Phone) Choice 1: \"I really don't mind.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Borrow \"ICU\" from DVD store</li>\n<li>Buy \"The Craft of Cinema\" and \"ABCs of Crafting\" from Shinjuku bookstore</li>\n<li>Buy \"Mega Fertilizer\" x6 <strong>(Y18000)</strong> from Shinuku flower shop</li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 3)</strong> <strong>(Obtain \"Billiards Magician\")</strong></li>\n</ul>\n"
		},
		"6/22 Wednesday": {
			"Daytime": "<ul>\n<li>Lovers Hangout Harajuku<ol>\n<li>Choice 1: \"Yeah.\" (+3)</li>\n<li>Receive Idol Poster</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Currency\" <strong>(Knowledge +2)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +5)</strong></li>\n<li>Chariot Rank 7 <strong>(Unlocks Tsukishima)</strong><ol>\n<li>Choice 2: \"Let's talk to Takeishi.\" (+3)</li>\n<li>Choice 1: \"I think it's cool, Ryuji.\" (+3)</li>\n<li>(Phone) Choice 1: \"Never know until you try.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/23 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"The Craft of Cinema\" <strong>(Boosts points from watching movies and DVDs)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"A pope.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 2<ol>\n<li>Choice 2: \"It's enigmatic.\" (+2)</li>\n<li>Choice 1: \"I can't wait.\" (+3)</li>\n<li>(Phone) Choice 1: \"You're already doing enough.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Ordering food without money.\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Ohya at Bar Crossroads in Shinjuku, Devil Rank 1 <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"6/24 Friday": {
			"Daytime": "<ul>\n<li>Buy Yakisoba Pan from school store</li>\n<li>Lovers Rank 6<ol>\n<li>Choice 1: \"It seems that way.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Show her your own strength.\" (+3)</li>\n<li>(Phone) Choice 2: \"I'll cheer you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Temperance Rank 6 <strong>(Y5000)</strong><ol>\n<li>Choice 2: \"Want to rest a bit?\" (+2)</li>\n<li>Choice 1: \"Are you all right?\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"How are you feeling, though?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"6/25 Saturday": {
			"Class": "<ul>\n<li>Finish reading \"ABCs of Crafting\" <strong>(Doubles the number of items that can be crafted)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 7 <strong>(Guts +2)</strong><ol>\n<li>Choice 2: \"She's a great doctor.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Just rest for today.\" (+2)</li>\n<li>Choice 3: <strong>\"I'm glad you did.\"</strong> (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Hangout</li>\n</ul>\n"
		},
		"6/26 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +2)</strong></li>\n<li><strong>Reach treasure in Bank Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/27 Monday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Dogs.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"6/28 Tuesday": {
			"Daytime": "<ul>\n<li><strong>Clear Bank Palace</strong></li>\n<li><strong>Need Y100,000 for Fortune Rnk 0.2</strong></li>\n<li><strong>Need to obtain Priestess and Faith personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Watch \"ICU\" <strong>(Kindness +5)</strong> <strong>(Kindness Lv. 3)</strong></li>\n</ul>\n"
		},
		"6/29 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Gold.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 3<ol>\n<li>Choice 1: \"Making bento?\" (+3)</li>\n<li>Choice 2: \"It looks delicious.\" (+2)</li>\n<li>Choice 1: \"Is that all for you?\" (+3)</li>\n<li>Choice 2: \"It's definitely unique.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"You could try again sometime?\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Yakisoba Pan for Black Robe</li>\n<li>Temperance Rank 7 <strong>(Y5000)</strong><ol>\n<li>Choice 3: \"Don't pay them.\" (+3)</li>\n<li>Choice 3: <strong>\"Think this through more.\"</strong> (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"6/30 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 3 <strong>(Ueno unlocked)</strong><ol>\n<li>Choice 3: \"Don't let it bother you.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"This isn't like you.\" (+3)</li>\n<li>Choice 2: \"That's the spirit.\" (+2)</li>\n<li>(Phone) Choice 1: \"That's the spirit.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Front\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Chihaya at Shinjuku fortune telling booth, Fortune Rank 0.1</li>\n</ul>\n"
		}
	},
	"July": {
		"7/1 Friday": {
			"Train": "<ul>\n<li>Finish reading \"The Gallant Rogue\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Barbarian's head.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"Speed Reader\" from library</li>\n<li>Buy all books including \"Ghost Encounters\" and \"Tidying the Heart\" from Shibuya bookstore</li>\n<li>Buy Summer Lotto S <strong>(sequential)</strong> lottery ticket <strong>(Y5000)</strong> from Shibuya <strong>(Does not unlock \"Easy Mondayey\", only weekly or daily prizes do)</strong></li>\n<li>Talk to Makoto outside Shujin student council room, Priestess Rank 1 <strong>(Requires Knowledge Lv. 3)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Temperance Rank 8 <strong>(Y5000)</strong><ol>\n<li>Choice 3: \"Is this really what you want?\" (+3)</li>\n<li>Choice 2: \"If that's what you decided.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"That's the right choice.\" (+3)</li>\n<li>Choice 2: \"That's reassuring.\" (+3)</li>\n<li>(Phone) Choice 3: \"I'll do anything for you.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/2 Saturday": {
			"Class": "<ul>\n<li>Finish reading \"Speed Reader\" <strong>(Read books 2 chapters at a time)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"Zorro, the Outlaw\" from library</li>\n<li>Temperance Rank 8.1 <strong>(Auto)</strong> <strong>(Request \"A Teacher Maid to Suffer\" unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n<li>Emperor Rank 4<ol>\n<li>Choice 3: \"I should bring a girl here.\" (+2)</li>\n<li>Choice 1: \"Love comes in all forms.\" (+3)</li>\n<li>(Phone) Choice 1: \"Don't get discouraged.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 0.2 <strong>(Y100000)</strong></li>\n<li>Accept Chariot Invitation</li>\n</ul>\n"
		},
		"7/3 Sunday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Ichigaya <strong>(Ichigaya unlocked)</strong><ol>\n<li>Choice 1: \"This is shady.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"She's the true master fisher.\" (+3) (Temperance +3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +2)</strong></li>\n<li>Sun Rank 4 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"7/4 Monday": {
			"Train": "<ul>\n<li>Finish reading \"Ghost Encounters\" <strong>(Guts +5)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Julius and Augustus.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Rank 5<ol>\n<li>Choice 3: \"Do you want me to strip?\" (+3)</li>\n<li>Choice 1: \"I'm sure you will.\" (+3)</li>\n<li>(Phone) Choice 3: \"There's still hope.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 0.3 <strong>(Request \"Ending the Boyfriend's Abuse\" unlocked)</strong></li>\n</ul>\n"
		},
		"7/5 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 2<ol>\n<li>Choice 1: \"You're very well informed.\" (+2)</li>\n<li>Choice 2: \"That was dangerous.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Couldn't agree more.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Strength Hangout Gym</li>\n</ul>\n"
		},
		"7/6 Wednesday": {
			"Class": "<ul>\n<li>Finish reading \"Zorro, the Outlaw\" <strong>(Kindness +5)</strong></li>\n</ul>\n",
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Mementos Palace</strong><ol>\n<li>An Elderly's Meaning of Life</li>\n<li>One Who Bullies Bullies</li>\n<li>Sadism Is Just a Sign of Love</li>\n<li>Part-time Job, Full-time Hell</li>\n<li>Ending the Boyfriend's Abuse</li>\n<li>Phantom Thieves VS Burglary Ring</li>\n<li>A Teacher Maid to Suffer</li></ol></li>\n<li><strong>Need to obtain Fortune and Star personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Study at Leblanc <strong>(Knowledge +5)</strong></li>\n</ul>\n"
		},
		"7/7 Thursday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"The Milky Way.\" and \"Soumen noodles.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Borrow \"The Illusory Popess\" from library</li>\n<li>Faith Rank 4<ol>\n<li>Choice 2: \"You're looking to buy?\" (+2)</li>\n<li>Choice 1: \"A pretty modern look.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Of course.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Good choice.\" (+2)</li>\n<li>-</li>\n<li>Choice 1: \"Everyone deals with that.\" (+2)</li>\n<li>Choice 2: \"We'll work at it together.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'm glad to hear that.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Narcotics\" <strong>(Knowledge +2)</strong></li>\n<li>Fortune Rank 1</li>\n</ul>\n"
		},
		"7/8 Friday": {
			"Train": "<ul>\n<li>Finish reading \"Tidying the Heart\" <strong>(Proficiency +5)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Buy Soothing Soba from Shibuya convenience store</li>\n<li>Lovers Rank 7 <strong>(Asakusa and Oshiage unlocked)</strong><ol>\n<li>Choice 2: \"She admires you.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Go get 'em, tiger.\" (+2)</li>\n<li>(Phone) Choice 1: \"You got this.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Ask Chihaya for Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li><strong>Temperance must be completed on the romance route to receive Night Pennant room decoration</strong></li>\n<li>Temperance Rank 9 Friendship <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Nonsense.\" (+3)</li>\n<li>Choice 1: \"What a bummer.\" (+3)</li>\n<li>Choice 2: \"I want to keep seeing you.\" (+2)</li>\n<li>Choice 2: \"Got it .\" (+2)</li>\n<li>(Phone) Choice 2: \"You can do it.\" (+2)</li></ol></li>\n<li>Temperance Rank 9 Romance <strong>(Y5000)</strong><ol>\n<li>Choice 1: \"Nonsense.\" (+3)</li>\n<li>Choice 1: \"What a bummer.\" (+3)</li>\n<li>Choice 2: \"I want to keep seeing you.\" (+2)</li>\n<li>Choice 2: \"I mean what I say.\" (+0)</li>\n<li>Choice 2: \"I'm a man; you're a woman.\" (+0)</li></ol></li>\n</ul>\n"
		},
		"7/9 Saturday": {
			"Class": "<ul>\n<li>Question: \"A triangle.\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 9.1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Hifumi in Kanda church, Star Rank 1 <strong>(Requires Charm Lv. 3)</strong> <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"7/10 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Request \"The Lovesick Cyberstalking Girl\" unlocked</li>\n<li>Finish watching \"ICU\" <strong>(Kindness +5)</strong></li>\n</ul>\n"
		},
		"7/11 Monday": {
			"Class": "<ul>\n<li>Question: \"Memories that last a long time.\", \"Infinite.\", and \"Forever.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Soothing Soba for Koedo Sword</li>\n<li>Star Rank 2 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 1: \"That's interesting.\" (+2)</li>\n<li>-</li>\n<li>Choice 3: \"But you don't want to, right?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/12 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Thievery.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Chariot Rank 8<ol>\n<li>-</li>\n<li>Choice 1: \"Things turned out for the best.\" (+3)</li>\n<li>Choice 1: \"All I did was watch.\" (+3)</li>\n<li>Choice 2: \"You weren't cool though.\" (+3)</li>\n<li>(Phone) Choice 2: \"So, case closed?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Vacation\" <strong>(Knowledge +2)</strong></li>\n<li>Justice Rank 3 <strong>(Requires Charm Lv. 3 and Knowledge Lv. 3)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"Should've figured.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"Wasn't it fun?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/13 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"64 degrees.\", \"Zhuge Liang.\", \"Barbarians' heads.\", and \"To offer them instead of heads.\"</li>\n</ul>\n"
		},
		"7/14 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Red King Crab, <strong>(Paralithodes)</strong>.\" and \"It caused confusion in the economy.\"</li>\n</ul>\n"
		},
		"7/15 Friday": {
			"All Day": "<ul>\n<li>Exams: \"Raining cats and dogs.\" and \"Demon Guts.\"</li>\n</ul>\n"
		},
		"7/16 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"7/17 Sunday": {
			"Evening": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Borrow \"The Running Dead\" from DVD shop</li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Lovers Hangout Movies <strong>(Charm +10)</strong><ol>\n<li>Choice 2: \"Understandable.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"7/18 Monday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"7/19 Tuesday": {
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n<li>Priestess Rank 3<ol>\n<li>Choice 1: \"You have the wrong idea.\" (+2)</li>\n<li>Choice 2: \"You can change.\" (+3)</li>\n<li>(Phone) Choice 1: \"Sounds like you two get along.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Finals\" <strong>(Knowledge +2)</strong></li>\n<li>Talk to Sojiro for exam reward</li>\n<li>Fortune Rank 2 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 3: \"Encourage her.\" (+0)</li>\n<li>Choice 2: \"Overturn your fate!\" (+0)</li>\n<li>Choice 2: \"Open your mind to change.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course I am.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"7/20 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"The Running Dead\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		},
		"7/21 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong> <strong>(Proficiency Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/22 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Finish watching \"The Running Dead\" <strong>(Guts +5)</strong> <strong>(Guts Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/23 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Crafting <strong>(Proficiency +3)</strong></li>\n</ul>\n"
		},
		"7/24 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"7/25 Monday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with Leblanc bathroom, Clean Leblanc with matching arcana <strong>(Kindness +2)</strong> <strong>(Hierophant +1)</strong></li>\n</ul>\n"
		},
		"7/26 Tuesday": {
			"Daytime": "<ul>\n<li>Buy Retro Game Set <strong>(Y5000)</strong> from recycling shop</li>\n<li>Priestess Rank 4<ol>\n<li>Choice 1: \"That's unlike you.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"Why do you use it?\" (+3)</li>\n<li>Choice 3: \"It's an amazing goal.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li>Reload for MRE Ration from airsoft shop vending machine</li>\n<li>Trade MRE Ration for \"Factorization Guide\"</li>\n<li>Fortune Rank 3 <strong>(Do not need matching arcana, expect 1 less note)</strong><ol>\n<li>Choice 2: \"Follow his heart.\" (+0)</li>\n<li>Choice 1: \"Thieves may steal her away.\" (+0)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"7/27 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Emperor Hangout Leblanc-7/27 <strong>(Charm +5)</strong><ol>\n<li>Choice 3: \"A bit of everything!\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Fireworks\" <strong>(Knowledge +2)</strong></li>\n<li>Temperance Rank 10 <strong>(Y5000)</strong></li>\n</ul>\n"
		},
		"7/28 Thursday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Leblanc-7/28 <strong>(Guts +5)</strong><ol>\n<li>Choice 2: \"Definitely the rival.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Priestess Hangout Movies <strong>(Guts +10)</strong><ol>\n<li>Choice 1: \"Not at all.\" (+3)</li></ol></li>\n<li>Accept Justice Invitation</li>\n</ul>\n"
		},
		"7/29 Friday": {
			"Daytime": "<ul>\n<li>Justice Hangout Shinagawa <strong>(Shinagawa unlocked)</strong><ol>\n<li>Choice 1: \"It's a nice place.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"If you like.\" (Devil +2)</li>\n<li>Choice 2: \"It's nothing bad.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Talk to Iwai in Shibuya airsoft shop, Hanged Rank 1 <strong>(Requires Guts Lv. 4)</strong></li>\n</ul>\n"
		},
		"7/30 Saturday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Keep sitting on sofa in front furniture store in east Kichijoji <strong>(Guts +3)</strong></li>\n<li>Lovers Rank 8<ol>\n<li>Choice 2: \"You have some real guts.\" (+3)</li>\n<li>Choice 1: \"There's no doubt in my mind.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I'm sure she already knows.\" (+3)</li>\n<li>(Phone) Choice 3: \"You can ask her yourself.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Visit the donut shop across from the Kichijoji power stone shop, Answer Morgana's quiz <strong>(Guts +3)</strong></li>\n<li>Fortune Hangout</li>\n</ul>\n"
		},
		"7/31 Sunday": {
			"Daytime": "<ul>\n<li>Ask Chihaya for Mondayey Reading <strong>(Y5000)</strong></li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Charm +3)</strong> <strong>(Charm Lv. 4)</strong></li>\n<li><strong>Reach treasure in Pyramid Palace</strong></li>\n<li><strong>Need to obtain Hermit, Hanged, and Devil personas</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Fortune Rank 4<ol>\n<li>-</li>\n<li>Choice 3: \"Trust in yourself.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"I didn't do much.\" (+2)</li></ol></li>\n</ul>\n"
		}
	},
	"August": {
		"8/1 Monday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Hangout Leblanc-8/1 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"Just go to the library.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 3 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 1: \"Describes you perfectly.\" (+2)</li>\n<li>Choice 2: \"Having a difficult time?\" (+2)</li>\n<li>(Phone) Choice 1: \"Bring it on.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/2 Tuesday": {
			"Daytime": "<ul>\n<li><strong>Clear Pyramid Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Fortune Rank 5<ol>\n<li>Choice 1: \"You're such a hard worker.\" (+3)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"8/3 Wednesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Request \"We Aren't Just Your Slaves\" flag</li>\n<li>Priestess Rank 5<ol>\n<li>Choice 3: \"He sounds suspicious.\" (+3)</li>\n<li>Choice 1: \"I got this.\" (+3)</li>\n<li>(Phone) Choice 3: \"Try to reach out to her.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Island\" <strong>(Knowledge +2)</strong></li>\n<li>Hanged Rank 2 <strong>(Proficiency +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"How's your cold?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/4 Thursday": {
			"Daytime": "<ul>\n<li>Request \"Who's Been Assaulting People?\" flag</li>\n<li>Emperor Hangout Leblanc-8/4 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"Let's go.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Joyride, but return the car.\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Church</li>\n</ul>\n"
		},
		"8/5 Friday": {
			"Daytime": "<ul>\n<li>Request \"Calling for Justice for Cats\" flag</li>\n<li>Chariot Rank 9<ol>\n<li>Choice 1: \"Are you satisfied now?\" (+3)</li>\n<li>Choice 3: \"Don't do it.\" (+3)</li>\n<li>Choice 2: \"I never realized that.\" (+3)</li>\n<li>Choice 1: \"I agree.\" (+2)</li>\n<li>(Phone) Choice 1: \"Congratulations.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Emperor Hangout Movies <strong>(Kindness +10)</strong><ol>\n<li>Choice 1: \"I don't mind.\" (+3)</li></ol></li>\n<li>Accept Lovers Invitation</li>\n</ul>\n"
		},
		"8/6 Saturday": {
			"Daytime": "<ul>\n<li>Lovers Hangout Meiji-Shrine<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"As expected of a doctor.\" (+3) (Death +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 4 <strong>(Jinobocho unlocked)</strong><ol>\n<li>Choice 3: \"Must've been the katsu curry.\" (+2)</li>\n<li>Choice 2: \"They're cool.\" (+2)</li>\n<li>(Phone) Choice 1: \"I'd love to.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/7 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Proficiency +2)</strong></li>\n<li>Borrow \"31\" from DVD store</li>\n<li>Buy \"Master Swordsman\" from Jinbocho</li>\n<li>Buy Exorcism Water from church</li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Work at convenience store <strong>(Charm +7)</strong> <strong>(Request \"Calling for Justice for Cats\" unlocked)</strong><ol>\n<li>Handle the queue efficiently</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Exorcism Water for Model Gun</li>\n<li>Sun Rank 5 (No Persona Needed) <strong>(Charm +4)</strong></li>\n</ul>\n"
		},
		"8/8 Monday": {
			"Daytime": "<ul>\n<li>Emperor Hangout Leblanc-8/8 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"If I can find a good deal.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Courage\" <strong>(Knowledge +2)</strong></li>\n<li>Star Rank 5 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 2: \"She's scary.\" (+2)</li>\n<li>Choice 2: \"You should stop then.\" (+2)</li>\n<li>(Phone) Choice 2: \"You've got a lot to deal with\u2026\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/9 Tuesday": {
			"Daytime": "<ul>\n<li>Emperor Rank 6 <strong>(Requires Proficiency Lv. 4)</strong><ol>\n<li>Choice 1: \"It feels nostalgic.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"I couldn't possibly tell you.\" (+3)</li>\n<li>(Phone) Choice 1: \"He had a certain dignity.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 4<ol>\n<li>-</li>\n<li>Choice 3: \"Now this is my kind of club.\" (+3)</li>\n<li>Choice 1: \"Any recommendations?\" (+3)</li>\n<li>Choice 1: \"It's a great place.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"I can use a microwave.\" (+3)</li>\n<li>(Phone) Choice 2: \"I kinda get it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/10 Wednesday": {
			"Daytime": "<ul>\n<li>Faith Rank 5<ol>\n<li>Choice 1: \"It's a surprise, yeah.\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"Go ahead. I'll watch.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I saw!\" (+3)</li>\n<li>Choice 1: \"That's important.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Gymnastics.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Strength Hangout Aquarium</li>\n</ul>\n"
		},
		"8/11 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Emperor Hangout Leblanc-8/11 <strong>(Charm +5)</strong><ol>\n<li>Choice 1: \"There's no way.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Ask Chihaya for Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hierophant +2)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong> <strong>(Kindness Lv. 4)</strong></li>\n<li>Sun Rank 6</li>\n</ul>\n"
		},
		"8/12 Friday": {
			"Daytime": "<ul>\n<li>Emperor Rank 7<ol>\n<li>-</li>\n<li>Choice 2: \"What do you mean?\" (+2)</li>\n<li>Choice 1: \"The truth is within you.\" (+3)</li>\n<li>(Phone) Choice 1: \"Calm down.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hierophant +2)</strong></li>\n<li>Devil Rank 2 <strong>(Charm +4)</strong><ol>\n<li>Choice 3: \"Mishima might\u2026\" (+2)</li>\n<li>-</li>\n<li>Choice 2: \"It's for the article.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/13 Saturday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Leblanc-8/13 <strong>(Guts +5)</strong><ol>\n<li>Win or lose (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 5<ol>\n<li>-</li>\n<li>Choice 1: \"Are you used to gunplay?\" (+2)</li>\n<li>Choice 1: \"You wanted to be a hero?\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"You did fine.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/14 Sunday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Guts +3)</strong></li>\n<li>Lovers Rank 9 Friendship<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you, Ann.\" (+3)</li>\n<li>Choice 2: \"You have the others.\" (+0)</li></ol></li>\n<li>Lovers Rank 9 Romance<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you, Ann.\" (+3)</li>\n<li>Choice 1: \"You have me.\" (+0)</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"I'm yours forever.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 7 (No Persona Needed) <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"8/15 Monday": {
			"Daytime": "<ul>\n<li><strong>[Optional]</strong> Priestess Hangout Jinbocho<ol>\n<li>Choice 1: \"Let's get cracking.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Wow, this is useful information.\" (+3) (Star +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Charm)</strong></li>\n<li>Devil Rank 3 <strong>(Charm +4)</strong> <strong>(Charm Lv. 5)</strong><ol>\n<li>Choice 3: \"You shouldn't make assumptions.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"She was falsely accused?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/16 Tuesday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Priestess Rank 6 <strong>(Requires Charm Lv. 5)</strong><ol>\n<li>Choice 3: \"Love comes in many forms.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Tell him you're on a date.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: <strong>\"You're just Chihaya to me.\"</strong> (+3)</li>\n<li>(Phone) Choice 2: \"Be honest with yourself.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/17 Wednesday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Fortune +2)</strong></li>\n<li>Work at flower shop <strong>(Kindness +7)</strong> <strong>(Request \"Who's Been Assaulting People?\" unlocked)</strong><ol>\n<li>Create a bouquet that satisfies the customer's request</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Crossword: \"Sunburn\" <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 5 (No Persona Needed)</li>\n</ul>\n"
		},
		"8/18 Thursday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Priestess Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"He was a noble man.\" (+3)</li>\n<li>Choice 2: \"I'm sure he was happy.\" (+3)</li>\n<li>Choice 2: \"You can figure that out now.\" (+2)</li>\n<li>Choice 1: \"I'm game if you are.\" (+2)</li>\n<li>(Phone) Choice 1: \"Of course.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Lovers +2)</strong></li>\n<li>Strength Hangout Sky Tree</li>\n</ul>\n"
		},
		"8/19 Friday": {
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Guts)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Lovers +2)</strong></li>\n<li>Lovers Rank 10 <strong>(Odaiba unlocked)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Big Bang Challenge <strong>(Guts +7, Knowledge +5, Charm +5, Proficiency +5)</strong></li>\n</ul>\n"
		},
		"8/20 Saturday": {
			"Daytime": "<ul>\n<li>Buy Melon Pan from Ginza Line gate near Shibuya hideout</li>\n<li>Chariot Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Proficiency)</strong></li>\n<li>Hanged Rank 3 <strong>(Proficiency +4)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"I always knew you were a thug.\" (+3)</li>\n<li>Choice 3: \"We made a deal, didn't we?\" (+3)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"8/21 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Watch \"31\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		},
		"8/22 Monday": {
			"Evening": "<ul>\n<li>Trade Melon Pan for Old Man's Fist</li>\n<li>Check Summer Lotto S <strong>(sequential)</strong> lottery results <strong>(Does not unlock \"Easy Mondayey\", only weekly or daily prizes do)</strong></li>\n<li>Star Rank 6 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 2: \"Is that frustrating?\" (+2)</li>\n<li>Choice 3: \"Do what you love.\" (+2)</li>\n<li>(Phone) Choice 2: \"You're imagining things.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/23 Tuesday": {
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Proficiency)</strong></li>\n<li>Hanged Rank 4 <strong>(Proficiency +4)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"Where's my reward?\" (+3)</li>\n<li>(Phone) Choice 1: \"I agree.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/24 Wednesday": {
			"Evening": "<ul>\n<li>Star Hangout Inokashira<ol>\n<li>Choice 2: \"It's a good stimulator, huh?\" (+3)</li></ol></li>\n</ul>\n"
		},
		"8/25 Thursday": {
			"Evening": "<ul>\n<li>Crossword: \"Sweltering\" <strong>(Knowledge +2)</strong> <strong>(Knowledge Lv. 5)</strong></li>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hanged +2)</strong></li>\n<li>Hierophant Rank 4 <strong>(Kindness +4)</strong><ol>\n<li>Choice 1: \"Tell me more.\" (+3)</li>\n<li>Choice 2: \"Call Sojiro's phone.\" (+3)</li>\n<li>(Phone) Choice 1: \"Understood.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/26 Friday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Ask Lala at Bar Crosswords to work there</li>\n<li>Work at bar <strong>(Kindness +3)</strong></li>\n</ul>\n"
		},
		"8/27 Saturday": {
			"Evening": "<ul>\n<li>Rain</li>\n<li>Star Rank 7 <strong>(Knowledge +2)</strong><ol>\n<li>Choice 3: \"It may come down to luck.\" (+3)</li>\n<li>Choice 2: \"I believe in you.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"8/28 Sunday": {
			"Evening": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Kindness +3)</strong></li>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +7)</strong></li>\n<li>Work at bar, Talk to Scary-looking Man <strong>(Kindness +4, Guts +2)</strong> <strong>(Guts Lv. 5)</strong> <strong>(Request \"We Aren't Just Your Slaves\" unlocked)</strong></li>\n</ul>\n"
		},
		"8/29 Monday": {
			"Evening": "<ul>\n<li>Request \"Who's Muscling in Yongen-Jaya?\" unlocked</li>\n<li>Devil Rank 4 <strong>(Charm +3)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"Of course we are.\" (+2)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Leave it to me.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/30 Tuesday": {
			"Evening": "<ul>\n<li>Crossword: \"Hacking\" <strong>(Knowledge +2)</strong></li>\n<li>Fortune Rank 7<ol>\n<li>Choice 3: \"I don't think so.\" (+3)</li>\n<li>(Phone) Choice 1: \"Are you gonna be okay?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"8/31 Wednesday": {
			"Class": "<ul>\n<li>Hermit Rank 1 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Finish watching \"31\" <strong>(Guts +5)</strong></li>\n</ul>\n"
		}
	},
	"September": {
		"9/1 Thursday": {
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Fortune Rank 7.1 <strong>(Request \"Debunking the Psychic!\" unlocked)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/2 Friday": {
			"Daytime": "<ul>\n<li>Buy Broken Laptop from recycling shop</li>\n<li>Buy PC Tool Set from Akihabara</li>\n<li>Buy Phantom Wafers, Thief Mask, and Calling Postcard from Shibuya</li>\n<li>Talk to Futaba outside Leblanc, Hermit Rank 2 <strong>(Requires Kindness Lv. 4)</strong><ol>\n<li>Choice 2: \"That's a great idea.\" (+2)</li>\n<li>Choice 1: \"If we work together.\" (+3)</li>\n<li>Choice 1: \"Sounds good to me.\" (+0)</li>\n<li>(Phone) Choice 1: \"I bet it will.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Typhoon\" <strong>(Knowledge +2)</strong></li>\n<li>Moon Rank 6 (No Persona Needed)</li>\n</ul>\n"
		},
		"9/3 Saturday": {
			"Class": "<ul>\n<li>Question: \"Prosperity.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 7.1 <strong>(Requires Knowledge Lv. 5)</strong> <strong>(Request \"Upstaging the Stage Mother\" unlocked)</strong><ol>\n<li>-</li>\n<li>Choice 1: \"That won't work.\" (+2)</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/4 Sunday": {
			"Daytime": "<ul>\n<li>Aojiru <strong>(Y5000)</strong> <strong>(Knowledge +2)</strong></li>\n<li>Request \"Winners Don't Use Cheats\" flag</li>\n<li>Investigate Shibuya arcade <strong>(Request \"Winners Don't Use Cheats\" unlocked)</strong></li>\n<li>Hermit Rank 3<ol>\n<li>Choice 3: \"I was about to come find you.\" (+3)</li>\n<li>Choice 1: \"Good to see you again.\" (+3)</li>\n<li>(Phone) Choice 3: \"We'll both do our best.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Phantom Wafers for Strength Up Ofuda x2</li>\n<li>Hanged Rank 5 <strong>(Proficiency +3)</strong><ol>\n<li>-</li>\n<li>Choice 2: \"You're pathetic.\" (+3)</li>\n<li>Choice 3: \"I'll stick around for the guns.\" (+3)</li>\n<li>(Phone) Choice 1: \"You're right.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/5 Monday": {
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Hanged +2)</strong></li>\n<li>Strength Hangout Beach</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 5 <strong>(Charm +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"That's unforgivable.\" (+3)</li>\n<li>(Phone) Choice 1: \"I don't mind.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/6 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Chronostasis.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 7.1 <strong>(Requires Charm Lv. 4)</strong> <strong>(Request \"Bad Medicine\" unlocked)</strong><ol>\n<li>-</li>\n<li>Choice 3: <strong>\"I'm your ally.\"</strong> (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"9/7 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/8 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/9 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/10 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/11 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/12 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/13 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/14 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Money loans for collateral.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Feed plant Mega Fertilizer <strong>(Kindness +5)</strong></li>\n</ul>\n"
		},
		"9/15 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/16 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"9/17 Saturday": {
			"Class": "<ul>\n<li>Question: \"Cats eating human tongues.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"9/18 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Interact with desk in your room, Repair laptop <strong>(Proficiency +5)</strong> <strong>(Proficiency Lv. 5)</strong></li>\n</ul>\n"
		},
		"9/19 Monday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Bad Medicine</li>\n<li>The Lovesick Cyberstalking Girl</li>\n<li>Calling for Justice for Cats</li>\n<li>Debunking the Psychic!</li>\n<li>Who's Been Assaulting People?</li>\n<li>We Aren't Just Your Slaves</li>\n<li>Who's Muscling in Yongen-Jaya?</li>\n<li>Winners Don't Use Cheats, attempt needed to unlock Tower Rnk 1</li>\n<li>Upstaging the Stage Mother</li></ol></li>\n<li><strong>Need to obtain Tower persona</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Festival\" <strong>(Knowledge +2)</strong></li>\n<li>Call Kawakami for massage</li>\n<li>Trade Thief Mask for Magic UP Fuda x2</li>\n<li>Star Rank 8 <strong>(Knowledge +2)</strong> <strong>(Throw away points)</strong><ol>\n<li>Choice 3: \"I'm glad her heart changed.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"I support it.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/20 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 8<ol>\n<li>Choice 1: \"He says that to all his girls.\" (+2)</li>\n<li>Choice 1: \"Absolutely.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li><strong>[Optional]</strong> Devil Hangout Odaiba<ol>\n<li>Choice 2: \"That's right.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"9/21 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Central Europe.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Luck Reading <strong>(Y5000)</strong> <strong>(Boost Kindness)</strong></li>\n<li>Talk to Shinya in Akihabara arcade</li>\n<li>Tell Futaba outside Leblanc to hack site</li>\n<li>Report back to Shinya, Tower Rank 1 <strong>(Kindness +7)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 6<ol>\n<li>Choice 3: \"A while, huh?\" (+3)</li>\n<li>Choice 2: \"\u2026You've been through a lot.\" (+2)</li>\n<li>Choice 1: \"This is nothing.\" (+3)</li>\n<li>Choice 1: \"Same.\" (+3)</li>\n<li>Choice 2: \"Because we're similar.\" (+2)</li>\n<li>Choice 1: \"I think you're right.\" (+3)</li>\n<li>(Phone) Choice 3: \"My bad, I guess.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/22 Thursday": {
			"Daytime": "<ul>\n<li>Star Hangout Akihabara <strong>(Emperor +3)</strong><ol>\n<li>Choice 1: \"Let's take things slow.\" (+3)</li>\n<li>Choice 3: \"How about stripping?\" (Emperor +3)</li>\n<li>Choice 3: \"That's fine.\" (Emperor +2)</li>\n<li>Choice 3: \"I can understand both.\" (Fortune +2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Ten years in prison.\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 5 <strong>(Kindness +3)</strong> <strong>(Kindness Lv. 5)</strong><ol>\n<li>Choice 3: \"I think I'm addicted!\" (+3)</li>\n<li>Choice 2: \"She wasn't normal, huh?\" (+3)</li>\n<li>Choice 1: \"It really paid off in the end.\" (+2)</li>\n<li>(Phone) Choice 2: \"She needs a balanced diet.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/23 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Billiards Magician\" <strong>(Masse Shot unlocked)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Councillor Rank 6<ol>\n<li>Choice 2: \"Another cup?\" (+2)</li>\n<li>Choice 1: \"I can do that.\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"So give up.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Calm down.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Maid Cafe <strong>(Charm +3)</strong></li>\n</ul>\n"
		},
		"9/24 Saturday": {
			"Train": "<ul>\n<li>Finish reading \"Night Skies\" <strong>(Ikebukuro unlocked)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"20 white and 12 black.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 4<ol>\n<li>Choice 2: \"Let's do this together.\" (+3)</li>\n<li>-</li>\n<li>Choice 3: \"I think it's cute.\" (+3)</li>\n<li>(Phone) Choice 3: \"I'll help you anytime.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Star Rank 9 Friendship<ol>\n<li>Choice 1: \"Give it all you got.\" (+2)</li>\n<li>Choice 3: \"A very queenly decision.\" (+3)</li>\n<li>Choice 1: \"I want to become stronger.\" (+0)</li>\n<li>(Phone) Choice 3: \"Let's win the next one.\" (+2)</li></ol></li>\n<li>Star Rank 9 Romance<ol>\n<li>Choice 1: \"Give it all you got.\" (+2)</li>\n<li>Choice 3: \"A very queenly decision.\" (+3)</li>\n<li>Choice 2: \"I want to stay by your side.\" (+0)</li>\n<li>Choice 1: \"I want us to date.\" (+0)</li>\n<li>(Phone) Choice 3: \"It was love at first sight.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/25 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Leblanc-9/25 <strong>(Guts +5)</strong><ol>\n<li>Win or lose (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 8 (No Persona Needed) <strong>(Charm +5)</strong></li>\n</ul>\n"
		},
		"9/26 Monday": {
			"Daytime": "<ul>\n<li>Tower Rank 2 <strong>(Kindness +5)</strong><ol>\n<li>Choice 2: \"Don't compare me to you.\" (+3)</li>\n<li>Choice 2: \"What a rude employee.\" (+2)</li>\n<li>Choice 2: \"Do you admire them?\" (+2)</li>\n<li>Choice 3: \"I'll let them know.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll work hard.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Billiards <strong>(Random Stat +3)</strong> <strong>(Technical Lv. 4)</strong></li>\n</ul>\n"
		},
		"9/27 Tuesday": {
			"Daytime": "<ul>\n<li>Interact with crane game in Akihabara arcade<ol>\n<li>Receive Jack Frost Doll</li></ol></li>\n<li>Councillor Rank 7<ol>\n<li>Choice 3: \"Are you a fan?\" (+3)</li>\n<li>Choice 2: \"As in, removing them?\" (+3)</li>\n<li>Choice 1: \"The change of heart?\" (+3)</li>\n<li>Choice 3: \"It's intriguing.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 6 <strong>(Kindness +5)</strong><ol>\n<li>Choice 3: \"To each his own.\" (+2)</li>\n<li>Choice 3: \"Shut your mouth.\" (+3)</li>\n<li>Choice 1: \"Saving Futaba was no mistake.\" (+2)</li>\n<li>(Phone) Choice 3: \"If I can help somehow\u2026\" (+2)</li></ol></li>\n</ul>\n"
		},
		"9/28 Wednesday": {
			"Train": "<p>Evening: Finish reading \"Chinese Sweets\" <strong>(Chinatown unlocked)</strong></p>\n",
			"Class": "<ul>\n<li>Question: \"Phantom.\", \"Vibration.\", and \"Syndrome.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach treasure in Spaceport Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Ranking\" <strong>(Knowledge +2)</strong></li>\n<li>Call Kawakami for massage</li>\n<li>Star Hangout Jinbocho<ol>\n<li>Choice 1: \"Leave it to me.\" (+3)</li>\n<li>Receive King Piece</li></ol></li>\n</ul>\n"
		},
		"9/29 Thursday": {
			"Class": "<ul>\n<li>Question: \"Imperial Household Agency.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Send calling card</li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Divulging someone's crimes.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"9/30 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Theme Park Escort\" <strong>(Maihama unlocked)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Clear Spaceport Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Strength Hangout Maid Cafe</li>\n</ul>\n"
		}
	},
	"October": {
		"10/1 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 3 <strong>(Kindness +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"That's the spirit.\" (+2)</li>\n<li>(Phone) Choice 1: \"Sure.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Girls.\" (+3)</li>\n<li>Choice 3: \"You should buy us something.\" (+3)</li>\n<li>(Phone) Choice 1: \"He's my age, so it comes easier.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/2 Sunday": {
			"Daytime": "<ul>\n<li>Emperor Rank 8<ol>\n<li>Choice 3: \"It has to be Ann.\" (+2)</li>\n<li>Choice 3: \"You've really grown, Yusuke.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Calling Postcard for Strawberry Daifuku x2</li>\n<li>Hermit Hangout Movies <strong>(Knowledge +7)</strong><ol>\n<li>Choice 2: \"I think so\u2026\" (+3)</li></ol></li>\n</ul>\n"
		},
		"10/3 Monday": {
			"Class": "<ul>\n<li>Question: \"Stars.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"10/4 Tuesday": {
			"Daytime": "<ul>\n<li>Priestess Rank 9 Friendship<ol>\n<li>Choice 2: \"Your fight's with me.\" (+3)</li>\n<li>Choice 1: \"We should get out of here.\" (+2)</li>\n<li>Choice 2: \"That was the right move.\" (+2)</li>\n<li>Choice 1: \"I'm a regular here.\" (+3)</li>\n<li>Choice 1: \"You'll find someone someday.\" (+3)</li>\n<li>(Phone) Choice 1: \"No problem at all.\" (+2)</li></ol></li>\n<li>Priestess Rank 9 Romance<ol>\n<li>Choice 2: \"Your fight's with me.\" (+3)</li>\n<li>Choice 1: \"We should get out of here.\" (+2)</li>\n<li>Choice 2: \"That was the right move.\" (+2)</li>\n<li>Choice 1: \"I'm a regular here.\" (+3)</li>\n<li>Choice 2: \"I'll be your study partner.\" (+0)</li>\n<li>Choice 1: \"I do.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'd do anything for you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 6<ol>\n<li>-</li>\n<li>Choice 1: \"He must not like you.\" (+2)</li>\n<li>Choice 2: \"You should trust in her.\" (+2)</li>\n<li>Choice 1: \"That's the spirit\" (+2)</li>\n<li>(Phone) Choice 3: \"I'll dig up some more for you.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/5 Wednesday": {
			"Class": "<ul>\n<li>Read \"Master Swordsman\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 5<ol>\n<li>-</li>\n<li>Choice 1: \"I think you're right.\" (+3)</li>\n<li>Choice 3: \"He's the protagonist.\" (+3)</li>\n<li>(Phone) Choice 1: \"You did great.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Star Rank 10</li>\n</ul>\n"
		},
		"10/6 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"Master Swordsman\" <strong>(Guts +7)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Joseph-Ignace Guillotin.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Tower Rank 4.0 <strong>(Kindness +3)</strong><ol>\n<li>Choice 3: \"Yeah, you tell him!\" (+2)</li>\n<li>Choice 1: \"Don't get so worked up.\" (+0)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Black\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Destiny Land</li>\n</ul>\n"
		},
		"10/7 Friday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Burger-kun Doll</li></ol></li>\n<li>Buy all books from Jinbocho</li>\n<li>Emperor Rank 9<ol>\n<li>Choice 1: \"Her love for her son.\" (+3)</li>\n<li>Choice 1: \"You've really changed, Yusuke.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 6.1 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/8 Saturday": {
			"Daytime": "<ul>\n<li>Tower Hangout Asakusa<ol>\n<li>Choice 1: \"Let's walk around and eat.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/9 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Nakano <strong>(Nakano unlocked)</strong><ol>\n<li>Choice 3: \"Work a part time job?\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"Basically my sister.\" (Hanged +1)</li>\n<li>Choice 1: \"He's my boss.\" (Hanged +2)</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 9 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/10 Monday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Leblanc-10/10 <strong>(Reload after seeing event)</strong><ol>\n<li>Choice 1: \"Of course.\" (+3) </li></ol></li>\n<li>Tower Rank 5 <strong>(Kindness +3)</strong><ol>\n<li>Choice 1: \"It was pretty weird.\" (+3)</li>\n<li>Choice 2: \"I'm sure you can do it.\" (+2)</li>\n<li>Choice 2: \"You need a new strategy.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'll be cheering you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Halloween\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/11 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Bouba.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n"
		},
		"10/12 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/13 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/14 Friday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Request \"The Killer Who Cleans Up Trash\" unlocked</li>\n<li>Emperor Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 7 <strong>(Requires Kindness Lv. 5)</strong> <strong>(Kindness +2)</strong><ol>\n<li>Choice 1: \"You might be right.\" (+2)</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Feel like a real dad now?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/15 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 6.0 <strong>(Kindness +3)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I believe in you.\" (+3)</li>\n<li>Choice 3: \"I'm worried about you.\" (+0)</li>\n<li>(Phone) Choice 2: \"That's up to you.\" (+0)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 7<ol>\n<li>Choice 2: \"Absolutely.\" (+3)</li>\n<li>Choice 2: \"He's clever.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Bring it on.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/16 Sunday": {
			"Daytime": "<ul>\n<li>Visit capsule row in Akihabara, Roll gacha for Gear Girimehkala x2</li>\n<li>Trade Gear Girimehkala with man near capsule row for Mystery Stew</li>\n<li>Hermit Rank 6<ol>\n<li>Choice 2: \"That must have been a shock.\" (+3)</li>\n<li>Choice 1: \"You didn't know any better.\" (+2)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"Are you running away again?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Gear Girimehkala for Hot-Blooded Sword</li>\n<li>Hanged Rank 7.1 <strong>(Requires Guts Lv. 5)</strong> <strong>(Request \"Shady Deal in the Shadows\" unlocked)</strong><ol>\n<li>Choice 2: \"I did it all for Iwai.\" (+3)</li>\n<li>Choice 1: \"I will.\" (+2)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"10/17 Monday": {
			"All Day": "<ul>\n<li>Exams: \"32 surfaces.\", \"It used to be one color.\", and \"Black and white picture.\"</li>\n</ul>\n"
		},
		"10/18 Tuesday": {
			"All Day": "<ul>\n<li>Exams: \"Charles-Henri Sanson\" and \"It's a hereditary profession.\"</li>\n</ul>\n"
		},
		"10/19 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Slave labor.\" and \"3 bees in all of Europe.\"</li>\n</ul>\n"
		},
		"10/20 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/21 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/22 Saturday": {
			"Class": "<ul>\n<li>Question: \"15.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 7<ol>\n<li>-</li>\n<li>Choice 2: \"Don't let him provoke you.\" (+3)</li>\n<li>Choice 2: <strong>\"You're charming as you are.\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"That's the spirit.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"10/23 Sunday": {
			"Evening": "<ul>\n<li>Moon Rank 7 (No Persona Needed)</li>\n</ul>\n"
		},
		"10/24 Monday": {
			"Class": "<ul>\n<li>Question: \"Memory bias.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Talk to Sojiro for exam reward</li>\n<li>Devil Rank 7.1 <strong>(Request \"Fighting for Truth of Journalism\" unlocked)</strong><ol>\n<li>Choice 2: \"You seem tired.\" (+2)</li>\n<li>-</li></ol></li>\n</ul>\n"
		},
		"10/25 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/26 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"10/27 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/28 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"10/29 Saturday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"10/30 Sunday": {
			"Daytime": "<ul>\n<li>Tower Hangout Maihama<ol>\n<li>Choice 3: \"Coming alone isn't bad.\" (+3)</li>\n<li>Receive Balloons</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Mystery Stew for Angel Badge - Angelic Grace</li>\n<li>Strength Hangout Art Museum</li>\n</ul>\n"
		},
		"10/31 Monday": {
			"Class": "<ul>\n<li>Read \"Call Me Chief\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Draw on classroom chalkboard <strong>(Guts +2)</strong></li>\n<li>Empress Rank 1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Stalls\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 8 <strong>(Request \"The Mondayey-grubbing Uncle\" unlocked)</strong><ol>\n<li>Choice 2: \"Something with curry.\" (+3)</li>\n<li>Choice 2: \"I was just protecting Futaba.\" (+2)</li></ol></li>\n</ul>\n"
		}
	},
	"November": {
		"11/1 Tuesday": {
			"Daytime": "<ul>\n<li>Talk to Futaba to initiate solo battle, Hierophant Rank 8.1</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 8<ol>\n<li>Choice 2: \"I know.\" (+3)</li>\n<li>Choice 3: \"It's because you're strong.\" (+3)</li>\n<li>Choice 2: <strong>\"Hell yeah I am.\"</strong> (+3)</li>\n<li>(Phone) Choice 2: \"It was all your own will.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/2 Wednesday": {
			"Train": "<ul>\n<li>Finish reading \"Call Me Chief\" <strong>(Kindness +7)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"A share of stolen goods.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Hermit Rank 7 <strong>(Request \"Daughter's Just a Meal Ticket\" unlocked)</strong><ol>\n<li>Choice 2: \"We have to put a stop to this.\" (+2)</li>\n<li>Choice 1: \"I'll do it, for you.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Justice Rank 7 <strong>(Requires Knowledge Lv. 4)</strong><ol>\n<li>Choice 2: \"That's why it's so fun.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"I couldn't let myself lose.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: <strong>\"I'll think about it.\"</strong> (+0)</li>\n<li>(Phone) Choice 3: \"We're rivals, aren't we?\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/3 Thursday": {
			"Daytime": "<ul>\n<li>Tower Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hierophant Rank 9<ol>\n<li>Choice 1: \"It's great.\" (+3)</li>\n<li>Choice 2: \"You have a great daughter.\" (+3)</li>\n<li>(Phone) Choice 2: \"Futaba did great.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/4 Friday": {
			"Class": "<ul>\n<li>Question: \"A sword.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Tower Rank 8 <strong>(Kindness +5)</strong> <strong>(Request \"A Mother's Aggression\" unlocked)</strong><ol>\n<li>Choice 2: \"No, she's not.\" (+2)</li>\n<li>Choice 3: \"Believe in them.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Let's save her.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Reward\" <strong>(Knowledge +2)</strong></li>\n<li>Justice Rank 8<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"I definitely wouldn't lose.\" (+3)</li>\n<li>Choice 2: \"Really hate losing, don't you?\" (+3)</li>\n<li>Choice 1: <strong>\"I accept.\"</strong> (+0)</li></ol></li>\n</ul>\n"
		},
		"11/5 Saturday": {
			"Train": "<p>Read \"Heroic Revelations\"</p>\n",
			"Class": "<ul>\n<li>Finish reading \"Heroic Revelations\" <strong>(Knowledge +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Priestess Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Moon Rank 8 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/6 Sunday": {
			"Daytime": "<ul>\n<li>Request \"Man of Many Faces and Debts\" unlocked</li>\n<li>Empress Hangout Asakusa<ol>\n<li>Choice 2: \"It was fun.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"There's nothing to fear.\" (+3) (Devil +2)</li>\n<li>Receive Kumade</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Sun Rank 10 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/7 Monday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Wanna-kun Doll</li></ol></li>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Shady Deal in the Shadows</li>\n<li>Fighting for Truth of Journalism</li>\n<li>Man of Many Faces and Debts</li>\n<li>Winners Don't Use Cheats</li>\n<li>The Killer Who Cleans Up Trash</li>\n<li>Daughter's Just a Meal Ticket</li>\n<li>A Mother's Aggression</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Devil Rank 8 <strong>(Charm +5)</strong><ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: <strong>\"I'll go with you\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"Good luck.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/8 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Any age.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Death Rank 8<ol>\n<li>-</li>\n<li>Choice 2: \"Let's get to work, doctor.\" (+3)</li>\n<li>Choice 1: <strong>\"It's for Miwa-chan.\"</strong> (+3)</li>\n<li>(Phone) Choice 1: \"I'll be cheering you on.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 8<ol>\n<li>Choice 2: \"I dunno.\" (+2)</li>\n<li>Choice 2: \"I guess I could consider it.\" (+3)</li>\n<li>(Phone) Choice 1: \"Understood.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/9 Wednesday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach barrier in Casino Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Moon Rank 9 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/10 Thursday": {
			"Train": "<p>Read \"Reckless Casanova\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Crow eyes are hard to see.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li><strong>Reach treasure in Casino Palace</strong></li>\n<li><strong>Need to obtain Empress persona</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>TV Quiz: \"Me in front of my TV.\" <strong>(Knowledge +2)</strong></li>\n<li>Hierophant Rank 10</li>\n</ul>\n"
		},
		"11/11 Friday": {
			"Class": "<ul>\n<li>Finish reading \"Reckless Casanova\" <strong>(Charm +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Attempt to send calling card</li>\n<li>Empress Rank 2<ol>\n<li>Choice 3: \"Are you starting a farm?\" (+3)</li>\n<li>Choice 3: \"He sounds suspicious.\" (+2)</li>\n<li>Choice 1: \"This is a complex issue.\" (+3)</li>\n<li>(Phone) Choice 3: \"Jewel Melon.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Devil Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 2: \"You're not giving up, are you?\" (+2)</li>\n<li>Choice 1: <strong>\"I can't leave you.\"</strong> (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I didn't take it seriously.\" (+0)</li></ol></li>\n<li>Devil Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 2: \"You're not giving up, are you?\" (+2)</li>\n<li>Choice 1: <strong>\"I can't leave you.\"</strong> (+3)</li>\n<li>-</li>\n<li>Choice 1: \"I took it seriously.\" (+0)</li>\n<li>Choice 1: \"I love you, Ichiko.\" (+0)</li>\n<li>(Phone) Choice 1: \"I wanted to hear your voice.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/12 Saturday": {
			"Class": "<ul>\n<li>Question: \"Because the voice is synthetic.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Tower Rank 9 <strong>(Kindness +5)</strong><ol>\n<li>Choice 1: \"I'm glad to hear that.\" (+3)</li>\n<li>Choice 3: \"It means you've matured.\" (+3)</li>\n<li>Choice 1: \"He wants to win at all costs.\" (+2)</li>\n<li>(Phone) Choice 3: \"You did a great job too.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 9<ol>\n<li>Choice 3: \"Are you sure he's still alive?\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"You need to trust your son.\" (+3)</li>\n<li>Choice 1: \"Kaoru is really strong-willed.\" (+3)</li>\n<li>(Phone) Choice 1: \"Like father, like son.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/13 Sunday": {
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Buy Moon Dango from Yongen-Jaya grocery store</li>\n<li>Death Rank 9 Friendship<ol>\n<li>Choice 3: \"It was rough.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"It wanted to see you.\" (+0)</li>\n<li>Choice 1: \"I love you.\" (+2)</li>\n<li>Choice 2: \"That sounds good.\" (+0)</li>\n<li>(Phone) Choice 3: \"I'm glad we saw it through.\" (+2)</li></ol></li>\n<li>Death Rank 9 Romance<ol>\n<li>Choice 3: \"It was rough.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"It wanted to see you.\" (+0)</li>\n<li>Choice 1: \"I love you.\" (+2)</li>\n<li>Choice 1: \"It isn't a joke.\" (+3)</li>\n<li>(Phone) Choice 2: \"So did you.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Moon Dango for Kintaro Axe</li>\n<li>Empress Hangout Movies <strong>(Guts +7)</strong><ol>\n<li>Choice 2: \"I like them a lot.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"11/14 Monday": {
			"Train": "<p>Read \"The Art of Automata\"</p>\n",
			"Class": "<ul>\n<li>Question: \"Because of high altitude.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Devil +2)</strong></li>\n<li>Empress Rank 3<ol>\n<li>Choice 3: \"It'll be okay, I promise.\" (+3)</li>\n<li>Choice 1: \"I don't want to go with you.\" (+3)</li>\n<li>Choice 2: \"Not yet.\" (+3)</li>\n<li>(Phone) Choice 1: \"Smart response.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Bashing\" <strong>(Knowledge +2)</strong></li>\n<li>Devil Rank 10</li>\n</ul>\n"
		},
		"11/15 Tuesday": {
			"Class": "<ul>\n<li>Question: \"His head was put on display.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Death +2)</strong></li>\n<li>Empress Rank 4 <strong>(Requires Proficiency Lv. 5)</strong><ol>\n<li>Choice 3: \"It must be amazing.\" (+3)</li>\n<li>Choice 3: \"Cheers.\" (+3)</li>\n<li>Choice 2: \"I can taste the elephant.\" (+3)</li>\n<li>Choice 3: \"Let's ask him.\" (+3)</li>\n<li>Choice 3: \"I'm not really sure.\" (+3)</li>\n<li>(Phone) Choice 3: \"Let's get coffee again sometime.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 2: \"Well, fate can be changed.\" (+3)</li>\n<li>Choice 1: \"I like having my fortune read.\" (+0)</li>\n<li>(Phone) Choice 1: \"I'm planning on it.\" (+2)</li></ol></li>\n<li>Fortune Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 2: \"Well, fate can be changed.\" (+3)</li>\n<li>Choice 2: \"So I can be with you.\" (+0)</li>\n<li>(Phone) Choice 1: \"I wanted to hear your voice too.\" (+2)</li></ol></li>\n</ul>\n"
		},
		"11/16 Wednesday": {
			"Class": "<ul>\n<li>Finish reading \"The Art of Automata\" <strong>(Proficiency +7)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Councillor Rank 8<ol>\n<li>Choice 2: \"What do you mean?\" (+3)</li>\n<li>Choice 1: \"Ooh, really?\" (+3)</li>\n<li>Choice 1: \"Thanks for the food!\" (+3)</li>\n<li>Choice 3: \"We've made a deal.\" (+3)</li>\n<li>Choice 1: \"Congratulations.\" (+3)</li>\n<li>Choice 1: \"I sure do.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 1: \"He's a good friend.\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Affinity Reading <strong>(Y5000)</strong> with matching arcana <strong>(Death +2)</strong></li>\n<li>Buy \"Knowing the Heart\" from Jinbocho</li>\n<li>Moon Rank 10 (No Persona Needed)</li>\n</ul>\n"
		},
		"11/17 Thursday": {
			"Train": "<ul>\n<li>Finish reading \"Knowing the Heart\" <strong>(Additional Technical conditions unlocked)</strong></li>\n</ul>\n",
			"Class": "<ul>\n<li>Question: \"Cochleoid.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Lexy Doll</li></ol></li>\n<li>Councillor Rank 9<ol>\n<li>-</li>\n<li>Choice 1: \"Kind of sad\u2026\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Death Rank 10 Romance <strong>(Romance route only)</strong></li>\n<li>Free Time <strong>(Friendship route only)</strong></li>\n</ul>\n"
		},
		"11/18 Friday": {
			"Daytime": "<ul>\n<li>Councillor Rank 10 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/19 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"11/20 Sunday": {
			"Daytime": "<ul>\n<li>Do not accept her deal</li>\n</ul>\n"
		},
		"11/21 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"11/22 Tuesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/23 Wednesday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/24 Thursday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>TV Quiz: \"Speaker of the House decides.\"</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/25 Friday": {
			"Daytime": "<ul>\n<li>Request \"Swindling Old Folk is Pretty Low\" unlocked</li>\n<li>Empress Rank 5<ol>\n<li>Choice 2: \"Somebody's telling the truth.\" (+3)</li>\n<li>Choice 3: \"There has to be another way.\" (+2)</li>\n<li>Choice 3: \"I don't think so.\" (+3)</li>\n<li>(Phone) Choice 3: \"Pinch yourself.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Strength Hangout Leblanc</li>\n</ul>\n"
		},
		"11/26 Saturday": {
			"Daytime": "<ul>\n<li>Hermit Rank 8<ol>\n<li>Choice 1: \"That's incredible.\" (+3)</li>\n<li>Choice 1: \"You worked really hard too.\" (+3)</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Want more pats?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Rank 10</li>\n</ul>\n"
		},
		"11/27 Sunday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Sheep Man Doll</li></ol></li>\n<li>Buy Legendary Yaki-Imo from Yongen-Jaya street vendor</li>\n<li>Hermit Rank 9 Friendship<ol>\n<li>Choice 1: \"You've really matured.\" (+3)</li>\n<li>Choice 2: \"Are you okay, Futaba?\" (+3)</li>\n<li>Choice 2: \"No way.\" (+2)</li>\n<li>Choice 1: \"Because we're teammates.\" (+0)</li>\n<li>(Phone) Choice 3: \"A key item.\" (+2)</li></ol></li>\n<li>Hermit Rank 9 Romance<ol>\n<li>Choice 1: \"You've really matured.\" (+3)</li>\n<li>Choice 2: \"Are you okay, Futaba?\" (+3)</li>\n<li>Choice 2: \"No way.\" (+2)</li>\n<li>Choice 2: \"Because I love you.\" (+0)</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 3: \"Do I really have to say it?\" (+2)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Legendary Yaki-Imo for Empowering Ofuda x3</li>\n<li>Fortune Rank 10</li>\n</ul>\n"
		},
		"11/28 Monday": {
			"Daytime": "<ul>\n<li>Empress Rank 6<ol>\n<li>Choice 3: \"Can you make some for me?\" (+3)</li>\n<li>Choice 1: \"I had no idea.\" (+3)</li>\n<li>Choice 3: \"Black like coffee?\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"Be strong, Haru.\" (+3)</li>\n<li>(Phone) Choice 1: \"You can talk to me anytime.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Charisma\" <strong>(Knowledge +2)</strong></li>\n<li>Devil Hangout Ginza<ol>\n<li>Choice 1: \"Get pumped!\" (+3)</li>\n<li>Receive Sushi Mug</li></ol></li>\n</ul>\n"
		},
		"11/29 Tuesday": {
			"Daytime": "<ul>\n<li>Empress Rank 7<ol>\n<li>-</li>\n<li>Choice 3: \"What do you want to do?\" (+3)</li>\n<li>Choice 3: \"You should tell him that.\" (+3)</li>\n<li>Choice 2: \"You can do it, Haru.\" (+3)</li>\n<li>(Phone) Choice 2: \"I'll always have your back.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"11/30 Wednesday": {
			"Daytime": "<ul>\n<li>Hermit Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		}
	},
	"December": {
		"12/1 Thursday": {
			"Daytime": "<ul>\n<li>Empress Rank 8<ol>\n<li>Choice 1: \"The soil?\" (+3)</li>\n<li>Choice 2: \"He's going to love it.\" (+3)</li>\n<li>Choice 2: \"You're amazing, Haru.\" (+3)</li>\n<li>(Phone) Choice 3: \"I want some too.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Hanged Hangout Inokashira<ol>\n<li>Choice 3: \"Planning for a picnic?\" (+3)</li>\n<li>Receive Swan Boat</li></ol></li>\n</ul>\n"
		},
		"12/2 Friday": {
			"Daytime": "<ul>\n<li>Empress Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 3: \"Give it all you've got, Haru.\" (+3)</li>\n<li>Choice 2: \"You did amazing.\" (+3)</li>\n<li>Choice 1: \"He saw us as good friends.\" (+0)</li>\n<li>(Phone) Choice 2: \"You sound happy.\" (+3)</li></ol></li>\n<li>Empress Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 3: \"Give it all you've got, Haru.\" (+3)</li>\n<li>Choice 2: \"You did amazing.\" (+3)</li>\n<li>Choice 2: \"I like you too, Haru.\" (+0)</li>\n<li>(Phone) Choice 2: \"I wanted to hear your voice.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Influenza\" <strong>(Knowledge +2)</strong></li>\n<li>Strength Hangout Underground Mall</li>\n</ul>\n"
		},
		"12/3 Saturday": {
			"Daytime": "<ul>\n<li>Tower Rank 10 <strong>(Kindness +2)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/4 Sunday": {
			"Daytime": "<ul>\n<li>Death Rank 10 Friendship <strong>(Friendship route only)</strong></li>\n<li>Free Time <strong>(Romance route only)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Hangout Jinbocho<ol>\n<li>Choice 1: \"Autobiographies of great people.\" (+3)</li></ol></li>\n</ul>\n"
		},
		"12/5 Monday": {
			"Daytime": "<ul>\n<li>Empress Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/6 Tuesday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Ogikubo<ol>\n<li>Choice 1: \"I'm in love.\" (+3)</li>\n<li>Receive Ramen Bowl</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Fortune Hangout Oshiage<ol>\n<li>Choice 2: \"Such a delicious thrill\u2026\" (+3)</li>\n<li>Receive Sky Tower Lamp</li></ol></li>\n</ul>\n"
		},
		"12/7 Wednesday": {
			"Daytime": "<ul>\n<li>Faith Hangout Shinagawa<ol>\n<li>Choice 1: \"Yeah.\" (+3)</li>\n<li>Choice 3: \"Let's see both.\" (+3)</li>\n<li>Receive Sea Slug Doll</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Illuminate\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/8 Thursday": {
			"Daytime": "<ul>\n<li>Hermit Hangout Asakusa<ol>\n<li>Choice 3: \"Hey look, a ninja.\" (+3)</li>\n<li>Receive I &lt;3 Tokyo Shirt</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>TV Quiz: \"Attempted murder.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/9 Friday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Reach treasure in Cruiser Palace</strong></li>\n<li>Justice Rank 9 <strong>(Auto)</strong></li>\n<li>Justice Rank 10 <strong>(Auto)</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Temperance Hangout Odaiba Romance <strong>(Romance route only)</strong><ol>\n<li>-</li>\n<li>Receive Night Pennant</li></ol></li>\n<li><strong>Choose to \"I want to keep our promise.\" before going to bed</strong></li>\n</ul>\n"
		},
		"12/10 Saturday": {
			"Daytime": "<ul>\n<li><strong>Clear Cruiser Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Rain</li>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/11 Sunday": {
			"Daytime": "<ul>\n<li>Request \"The Head Honcho in Showbiz\" unlocked</li>\n<li>Buy Angel Tart from Shibuya underground mall</li>\n<li>Priestess Hangout Chinatown<ol>\n<li>Choice 3: \"Spring rolls?\" (+3)</li>\n<li>Choice 2: \"Let's find some.\" (+3)</li>\n<li>Receive Shumai Cushion</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Angel Tart for Feverent Bat</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/12 Monday": {
			"Daytime": "<ul>\n<li>Request \"Lady-Killer's Ballad\" unlocked</li>\n<li>Emperor Hangout Ikebukuro<ol>\n<li>Choice 2: \"I'm glad you're better now.\" (+3)</li>\n<li>Receive Star Stickers</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Approval\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/13 Tuesday": {
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Lovers Hangout Shibuya<ol>\n<li>Choice 1: \"Sounds like a good plan.\" (+3)</li>\n<li>Receive Choco Fountain</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/14 Wednesday": {
			"Daytime": "<ul>\n<li>Chariot Hangout Nakano<ol>\n<li>Choice 2: \"Let's go to the game center.\" (+3)</li>\n<li>Choice 1: \"Let's check it out.\" (+3)</li>\n<li>-</li>\n<li>Receive Featherman Dolls</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/15 Thursday": {
			"Daytime": "<ul>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Swindling Old Folk is Pretty Low</li>\n<li>The Head Honcho in Showbiz</li>\n<li>Lady-Killer's Ballad</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>TV Quiz: \"Can't be done by wanted men.\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/16 Friday": {
			"Daytime": "<ul>\n<li>Emperor Hangout Meiji-Shrine<ol>\n<li>Choice 3: \"Boatloads of money.\" (+3)</li>\n<li>Receive Hamaya</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/17 Saturday": {
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Black Frost Doll</li></ol></li>\n<li>Priestess Hangout Suidobashi<ol>\n<li>Choice 3: \"Let's go ride something.\" (+3)</li>\n<li>Receive Gi-Nyant Doll</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/18 Sunday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/19 Monday": {
			"Evening": "<ul>\n<li>Crossword: \"Christmas\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/20 Tuesday": {
			"All Day": "<ul>\n<li>Exams: \"D.\", \"Over one billion yen.\", \"Having his head displayed.\", and \"Public performance.\"</li>\n</ul>\n"
		},
		"12/21 Wednesday": {
			"All Day": "<ul>\n<li>Exams: \"Hearts.\" and \"Attend.\"</li>\n</ul>\n"
		},
		"12/22 Thursday": {
			"All Day": "<ul>\n<li>Exams: \"Japan.\", \"Dreadnought.\"</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Emperor Hangout Ueno<ol>\n<li>Choice 2: \"Glad you're enjoying this.\" (+3)</li>\n<li>Receive Nude Statue</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n<li><strong>Last Opportunity to complete Strength social link</strong></li>\n</ul>\n"
		},
		"12/23 Friday": {
			"Evening": "<ul>\n<li>Cannot leave Leblanc</li>\n<li>Talk to Sojiro for exam reward</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"12/24 Saturday": {
			"Class": "<ul>\n<li>Exam results <strong>(Charm +5)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Do not accept his deal</li>\n</ul>\n"
		},
		"12/25 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/26 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/27 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/28 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/29 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/30 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"12/31 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		}
	},
	"January": {
		"1/1 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/2 Monday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/3 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/4 Wednesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/5 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/6 Friday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/7 Saturday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/8 Sunday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/9 Monday": {
			"Daytime": "<ul>\n<li>Do not accept his deal</li>\n</ul>\n"
		},
		"1/10 Tuesday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/11 Wednesday": {
			"Class": "<ul>\n<li>Question with matching arcana: \"How numerous they are.\" and \"The Eight Million Gods.\" <strong>(Charm +2)</strong> <strong>(Lovers +2)</strong></li>\n</ul>\n"
		},
		"1/12 Thursday": {
			"All Day": "<ul>\n<li>Auto</li>\n</ul>\n"
		},
		"1/13 Friday": {
			"Daytime": "<ul>\n<li>Buy Special Chimaki from Kichijoji Chinese Stall</li>\n<li>Lovers Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"A Small Cry for Help\" unlocked</li>\n<li>Trade Special Chimaki for Strength Belt - Resist Phys</li>\n<li>Strength Hangout Your Room</li>\n</ul>\n"
		},
		"1/14 Saturday": {
			"Class": "<ul>\n<li>Question: \"Iwate.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Chariot Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Request \"O My Young Sister, I Cry For You\" unlocked</li>\n<li>Crossword: \"Resolution\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/15 Sunday": {
			"Daytime": "<ul>\n<li>Hermit Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/16 Monday": {
			"Daytime": "<ul>\n<li>Emperor Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/17 Tuesday": {
			"All Day": "<ul>\n<li>Rain</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Buchimaru Doll</li></ol></li>\n<li>Priestess Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/18 Wednesday": {
			"Class": "<ul>\n<li>Question: \"Impressive.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Empress Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/19 Thursday": {
			"Train": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 6<ol>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>-</li>\n<li>(Phone) Choice 2: \"You have to face it.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Dionysus\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/20 Friday": {
			"Class": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Rain</li>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/21 Saturday": {
			"Class": "<ul>\n<li>Question: \"A snake.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 7<ol>\n<li>-</li>\n<li>-</li>\n<li>Choice 1: \"You okay?\" (+3)</li>\n<li>Choice 1: \"That isn't true.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Of course.\" (+3)</li>\n<li>(Phone) Choice 3: \"I love a good challenge.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/22 Sunday": {
			"Daytime": "<ul>\n<li>Buy Supernova Burger from Big Bang Burger</li>\n<li>Faith Rank 8<ol>\n<li>Choice 1: \"Walk up to Sumire.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I'm here for you.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 3: \"I'm in love.\" (+3)</li>\n<li>-</li>\n<li>-</li>\n<li>Choice 2: \"Sounds like progress.\" (+3)</li>\n<li>(Phone) Choice 3: \"Online.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Trade Supernova Burger for Old Man's Elixir</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/23 Monday": {
			"Daytime": "<ul>\n<li>Faith Rank 9 Friendship<ol>\n<li>-</li>\n<li>Choice 1: \"It's no problem.\" (+3)</li>\n<li>Choice 1: \"Definitely.\" (+3)</li>\n<li>Choice 1: \"Of course I do.\" (+3)</li>\n<li>Choice 3: \"This is a new beginning.\" (+3)</li>\n<li>Choice 3: \"Go ahead.\" (+3)</li>\n<li>-</li>\n<li>Choice 1: \"Let's stay friends.\" (+0)</li>\n<li>Choice 3: \"You can always rely on me.\" (+3)</li>\n<li>(Phone) Choice 1: \"I'm glad to hear that.\" (+3)</li></ol></li>\n<li>Faith Rank 9 Romance<ol>\n<li>-</li>\n<li>Choice 1: \"It's no problem.\" (+3)</li>\n<li>Choice 1: \"Definitely.\" (+3)</li>\n<li>Choice 1: \"Of course I do.\" (+3)</li>\n<li>Choice 3: \"This is a new beginning.\" (+3)</li>\n<li>Choice 3: \"Go ahead.\" (+3)</li>\n<li>-</li>\n<li>Choice 2: \"I love you too.\" (+0)</li>\n<li>Choice 1: \"Calm down.\" (+3)</li>\n<li>Choice 3: \"You're so cute.\" (+3)</li>\n<li>(Phone) Choice 1: \"Get used to it.\" (+3)</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Crossword: \"Lachesis\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/24 Tuesday": {
			"Class": "<ul>\n<li>Question: \"Kind-hearted.\", \"Negative.\", and \"Resentful.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Empress Hangout Tsukishima<ol>\n<li>Choice 1: \"We'll try together.\" (+3)</li>\n<li>Receive Giant Spatula</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/25 Wednesday": {
			"Class": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Faith Rank 10</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/26 Thursday": {
			"Train": "<p>Free Time</p>\n",
			"Daytime": "<ul>\n<li><strong>Reach final floor of Mementos Palace</strong><ol>\n<li>A Small Cry for Help</li>\n<li>O My Young Sister, I Cry For You</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/27 Friday": {
			"Class": "<ul>\n<li>Question: \"To friends of friends of friends.\" <strong>(Knowledge +2)</strong></li>\n</ul>\n",
			"Daytime": "<ul>\n<li>Crane game<ol>\n<li>Receive Jagao Doll</li></ol></li>\n<li><strong>Reach treasure in Laboratory Palace</strong></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Crossword: \"Orochi\" <strong>(Knowledge +2)</strong></li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/28 Saturday": {
			"Daytime": "<ul>\n<li>Request \"Fake-Man Show\" flag</li>\n<li>Hermit Hangout Akihabara<ol>\n<li>Choice 3: \"You feel betrayed\u2026\" (+3)</li>\n<li>Receive Hero Figurine</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/29 Sunday": {
			"Daytime": "<ul>\n<li>Request \"An Idol and a Unicorn\" flag</li>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/30 Monday": {
			"Daytime": "<ul>\n<li>Investigate Kichijoji <strong>(Request \"Fake-Man Show\" unlocked)</strong></li>\n<li>Investigate Akihabara <strong>(Request \"An Idol and a Unicorn\" unlocked)</strong></li>\n<li>Money Reading <strong>(Y5000)</strong></li>\n<li><strong>Mementos Palace</strong><ol>\n<li>Fake-Man Show</li>\n<li>An Idol and a Unicorn</li></ol></li>\n</ul>\n",
			"Evening": "<ul>\n<li>Call Kawakami for massage</li>\n<li>Free Time</li>\n</ul>\n"
		},
		"1/31 Tuesday": {
			"Daytime": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		}
	},
	"February": {
		"2/1 Wednesday": {
			"Daytime": "<ul>\n<li>Free Time</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Free Time</li>\n</ul>\n"
		},
		"2/2 Thursday": {
			"Daytime": "<ul>\n<li>Faith Rank 11</li>\n</ul>\n",
			"Evening": "<ul>\n<li>Do not accept his deal</li>\n<li>Justice Rank 11 <strong>(Auto)</strong></li>\n</ul>\n"
		}
	}
};

//source: https://samurai-gamers.com/persona-5/flower-shop-part-time-guide/
const flowerStoreGuide = `
<table><tbody>
<tr><th>Flower Bouquet Request</th><th>Required Flowers</th></tr>
<tr><td>Flowers to Express Love</td><td> Scarlet Rose, Care-Nation, and Adoration Orchid</td></tr>
<tr><td>Red Flowers</td><td>Scarlet Rose, Care-Nation, and Gecko Orchid</td></tr>
<tr><td>Thank-You Flowers</td><td>The Sweetest of Peas, Rainbow Sage, and Gecko Orchid</td></tr>
<tr><td>Celebration Bouquet</td><td>Scarlet Rose, Care-Nation, and Venerable Chrysanthemum</td></tr>
<tr><td>Small Flowers with Soft Colors</td><td>Justice Jasmine, Enamored Orchid, and Fluorescent Freesia</td></tr>
<tr><td>Big Flowers with Little Scent</td><td>Gold Gerbera, Venerable Chrysanthemum, and Fluorescent Freesia</td></tr>
<tr><td>Bright, Pungent Flowers</td><td>Scarlet Rose, The Sweetest of Peas, and Stinking Olive</td></tr>
<tr><td>Flashy and Exciting Flowers</td><td>Scarlet Rose, Gold Gerbera, Gecko Orchid, and Venerable Chrysanthemum</td></tr>
<tr><td>Flowers for Friend\'s Childbirth</td><td>Rainbow Sage, Delightful Lily, and Gold Gerbera</td></tr>
</tbody>
</table>
`;

//source: https://samurai-gamers.com/persona-5/triple-seven-convenience-store-part-time-job-guide/
const convenienceStoreGuide = `
<table><tbody>
<tr><th>Question</th><th>Answer</th></tr>
<tr><td>Where is the position of the cow milk barcode?</td><td>Next to the company logo.</td></tr>
<tr><td>Where is the position of the boy chance barcode?</td><td>Back of the company logo.</td></tr>
<tr><td>Where is the position of the Edo rice ball barcode?</td><td>Behind.</td></tr>
<tr><td>Where is the position of the BW Panda Pan barcode?</td><td>Near the tail.</td></tr>
<tr><td>Where is the position of the skeleton umbrella barcode?</td><td>Behind the handle.</td></tr>
<tr><td>Where is the position of the horse racing newspaper barcode?</td><td>At the side of the company logo at the back (by the comment section).</td></tr>
<tr><td>Where is the position of the black donut barcode?</td><td>Near the brown sugar description.</td></tr>
<tr><td>Where is the position of the zebra ramen barcode?</td><td>Side of the zebra scoop.</td></tr>
<tr><td>Where is the position of the tiger pattern pants barcode?</td><td>On the tag lining.</td></tr>
<tr><td>Where is the position of the Super Duper Vanilla Cup barcode?</td><td>Side of the character illustration.</td></tr>
<tr><td>Where is the position of the india ink barcode?</td><td>Right side when viewed from the front.</td></tr>
</tbody></table>
`;

//source: https://joyceychen.com/persona5-negotiation/royal
const negotiationGuide = `
<input type="text" id="searchBar" onkeyup="filterQuestions()" placeholder="Search for questions or responses.." title="Type in a question or response">
<br/><br/>
<div id="questions">
<table>
	<tr>
		<th colspan="5">A bad rep spreads like wildfire. If I were you, I'd quit all this nonsense. What's the point?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't care.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't know any other way.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">After all, isn't it not pitiable when one denies one's own feelings?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It is a difficult topic.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>But the outcome is clear.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's mature to admit defeat.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">After confronting me like this... Are you that kind of human too?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's not my style.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What's wrong with that?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>So what?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Ah, it's a shame. If I'd taken this seriously from the start, I wouldn't be in this sorry state.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Then get serious now.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Making excuses?</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I wasn't trying either.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Ain't people your age suppose'ta be out on dates and stuff instead?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Right after this, kid.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Such a rude little boy...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Dating's not important.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">And if that's the case, why don't you just stop this futile endeavor? It's meaningless...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You have a point there...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can't stop.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll find meaning in it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Are all the kids these days doin' stuff like this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yeah, we sure are.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No, I thought this up myself.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Want to join in?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Are you bored?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yes, I'm bored.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm actually pretty busy.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I never thought about it.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Are you fighting to help or protect the world or something?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I won't tell you.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It pays the bills.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">As far as you're concerned, what kind of person was I to you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>My rival.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Nobody, really.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It doesn't matter.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...But be-hee-fore all that, let's enjoy a little chat, ho!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>All right, I suppose.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>There's no need for that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>[...]</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But before you do, do something funny. What can you do?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Impressions.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Making funny faces.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But is it fair to my kind if only I find such happiness, leaving them all behind?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I think so.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>They can all come.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Your kind?</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But I've been around the block, so I know--there's something else you want from me, isn't there?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Nope.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I just love the elderly.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I just want you to die happy.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But I've got a catch phrase that I'm famous for.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Hee-ho!</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Hee-haw!</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Personaaa!</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But this way of life in this world is all I've ever known.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not meaningless.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>There are other ways to live.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>You had a good run.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">But what if I ripped your body apart? ...What color blood would come pouring out?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Red.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Green.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't bleed or cry.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Can you sacrifice yourself in order to demonstrate your adoration of our Father?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I can.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can't.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't adore him.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Can you sacrifice yourself in order to demonstrate your veneration of our Father?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I can certainly try.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No can do.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What's veneration?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Care to explain yourself? I certainly hope you have a good reason for this boorish treatment.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That would take a while.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>There's no need to explain.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Just shut up...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">C'mon, what's with the mask? Kinda cringy, don'tcha think?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sure is.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Shut up...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm secretly a kid.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Confess your sins.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I apologize.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I think... I was wrong.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No chance.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Could this be what humans call a proposal...?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm surprised you knew.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No, it's not.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's a myth.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Couldn't ya at least make me a cup of tea or somethin'? Hell, that'd be real polite.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>So sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Brew your own.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not known for being polite.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Did I just see your hand shaking? Isn't your guilt tormenting you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's just a chill.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Yeah, I can't take it...</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Did I... lose?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yup...</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Not sure yet.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nah, you totally won.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Didn't you feel like that when you were a kid, too?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not so bad-olescent.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Being a kid is tough.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't remember.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you have a dish you're good at?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Fried rice.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Mystery meat.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What are you saying?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you have a lot of friends? Ever feel like the things they do are annoying?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sometimes.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I have no friends.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you know what I speak of?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sin...?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Please tell me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I've done nothing wrong.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you seek friendly competition with a beloved neighbor? Or have you come to destroy a hated foe?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're a beloved neighbor.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD / OK?</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're a loathsome foe.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You sound preachy.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you...think of me as a charlatan?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I don't think that.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I think of you as a foe.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're not one?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Do you think they really mean it all the time?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yes.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No, but they say it anyway.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm cuter than most kids.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Doesn't what you're doing bother your conscience?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Now that you mention it...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>...Nope</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm past such things.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Don't take this the wrong way, but man... Bein' a carefree kid sure must be nice.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I want to be a kid forever.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I prefer being an adult.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I wish I was still a baby.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Don't you think expecting your would-be victim to be receptive to your words is unreasonable?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I do.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't worry about it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Don't you think it's sad that slang and sayings can grow old and get outdated?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That is sad.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't think so.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That just proves you're old.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">For you to force me to prostrate myself, as one who only seeks your well-being... Is there anything more irrational?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>My apologies.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't want salvation.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Guess what I want you to read me before you tuck me into bed!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>An animal book</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>A story about a Yakuza</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I have no idea</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Had I known things would turn out like this, I'd wish I had found the courage to ask that girl out...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not too late.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>You never had a chance.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll make sure she's happy.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Have you made an appointment, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I have.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>That's not it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Just tell me what you know.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Heed my words. I am not the one you should detest.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's absurd.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'll be the judge of that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hell, I got all sortsa girls lined up if you're into that.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Really?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're trying way too hard.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm not interested.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey. Aren't you hungry? Can we take a break and go eat somewhere?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>What're we getting?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Yeah.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Now's not the time.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, how about this? If you don't shoot me, then I'll kiss you. Not a bad deal, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Not a bad idea.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't want a kiss.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Have some self-respect.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, if I don't die here, what do you think I'll be like in the future?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A fashionable older woman.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I can't measure that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Living in darkness.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, if ya got any medicine, lend me some. One of them painkillers...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Are you okay?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I have some antacids.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>That won't change anything.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, if you got any medicine, lend me some. They're supposed ta work miracles, right...?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Are you OK?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What kind of medicine?</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That won't change anything?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, is my hair flat? Does it look weird?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It looks cute.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's weird looking.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Who cares?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, let's play a game! Guess what I wanna eat!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Hamburgers.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Curry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, mister, will you give me a yummy snack to eat?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Later.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No way.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What would you like?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey. So whaddya feel when you think about the future?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>An average level of happiness.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Live fast, die young.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Nothing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey, sonny if somethin's been botherin' you. I'm willin' ta give you a listen.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>My relationships...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I smell sweaty.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I have no worries.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Hey, there's no need for all this, right? Let's drop the drama and just go get something to eat. The thought has crossed your mind, hasn't it? Come on, where would you take me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>An expensive French restaurant.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>A busy ramen joint.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Where would you like to go?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Hey. Why aren't ya at school?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's after school.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't feel like going.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I actually finished school.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Honestly, aren't I, like, a way better girl than those idols?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're more unique.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Not really...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Who cares about idols?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How about we live together? What kind of place do you want to live in?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I can't live with you.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Next to a convenience store.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How 'bout we have an interview? You're the winner, after all. I'll listen to whatever you gotta say.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I feel great.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I want to aim higher.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Fighting is pointless.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How 'bout you, sonny? What kinda trip do you wanna take?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A luxury cruise.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Don't want to go anywhere.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>A trip to hell.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How 'bout you? You wanna get married someday?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I do.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>That's impossible.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How can you do such terrible things to a cute hee-ho like me!?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Now that you mention it...</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>...Cute?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How did I lose to you? I mean... I win when it comes to looks, ho.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>No, I do.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's all about heart.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">How did you find out about me, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Some flyers.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>A speciatly site.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Word of mouth.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Humans always want either an autograph or a self-hee, ho. Which is it, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I want an autograph.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I want a photo.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Give me your credit card.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Humans talk over drinks, right? How 'bout it? Hell, let me buy ya a round, sonny.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Quit messing around.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>You're really paying?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm a minor.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I also have loved ones who would miss me. You do catch my meaning, yes?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I do now.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>That doesn't matter.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm always alone.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I can't sadden my fans, ho. ...You catch my drift, don't you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm rooting for you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Tell me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You have no fans.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I coulda been a star...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A star?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>That's not happening.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Are you giving up?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I don't hate you. No, I don't feel that way at all...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Is that so?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Too late.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Then let's hold hands.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I fear neither death, nor you.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>In your situation?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're tough.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't push yourself.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...I gotta ask. How do you work out?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I don't really train.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I just have a knack for it.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>At a gym from hell.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I guess women are really more social these days, finding so many fun things to do outside the home.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's so true.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Men are social too.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Is that so?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I insist you surrender yourself to the authorities.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>This is a misunderstanding.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I apologize.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>You've got the wrong idea.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I know when I'm gettin' all sweaty. I'm glistenin', ain't I?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Like a disco ball.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Not at all.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Why does that matter?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I lost. Here I lay, at your feet, at your mercy. Just what do you want from me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Give me something.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Grovel before me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I don't know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I mean, how does it feel to wave your gun at an enemy who's completely lost the will to fight?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not bad.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>...I could get used to it.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It pains my heart...</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I need to recover, ho. Don't you feel that way too?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yeah, sometimes.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Battle is what soothes me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Quit whining.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I occasionally wish to pamper myself as a reward for working hard. How would you do that?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Relax at home.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Go impulse shopping.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Don't be so selfish.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I suppose it makes no difference if you kill me or if I die just a little bit later, dearie.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That isn't true</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's still a long ways off</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I suppose that's why I feel so confused, child. After all, why am I being treated like this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Because you resisted.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It can't be helped.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's for your own good.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I suppose this "real world" where you come from must be fairly boring.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It keeps me busy.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's better than here.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I think dying alone isn't so bad, dearie, but isn't living alone in the first place the real tragedy?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I don't think so.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Maybe you're right.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Being alone is a luxury.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I think the way you're treating me is "overfamiliar." I think...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>We are friends.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What's wrong with that?</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's because you're cute.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wanted to go on vacation, too, before all this happened...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's too bad.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>What are you getting at?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You have a boyfriend?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I was going to catch a great buy, live a life of celebrity... Where'd it all go wrong?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You did nothing wrong.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You dreamed too big.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's your personality.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wish I could see what kind of parents raised you to run loose and wreak havoc like this.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'll introduce you to them later.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I won't show you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Leave my parents out of this.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wish they would leave us old people alone. After all, it's not like we have much time left.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I agree.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Speak for yourself.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>There's an aging boom...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wonder how things might have been between us if cicumstances were different somehow.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>We wouldn't have been enemies.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>We'd have gotten married.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing would've changed.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wonder how things might have been between us if circumstances had been different somehow?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>We would have dated.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>We'd have gotten married.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing would've changed.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wonder if it's about time I quit this job.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Hang in there.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's a good idea.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>And then what?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I wonder if us speaking together like this now means that we are somehow connected...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It could be.</td>
		<td class="result unconfirmed"><div class="text">GOOD / OK</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No way.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's fate.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I would have never accepted this task if I knew it would involve this sort of suffering.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's a pity...</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Uninformed choices are bad.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Complaining won't help.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If so, then won't you overlook this? Let's make a deal...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>All right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>A deal with the enemy?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can't trust you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If that's the plan, well, you better make sure I'm satisfied.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Don't toy with me.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>You're not making sense.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>What would you like?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If that's true, then I don't think there's any real point in killing me...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Of course, there's a point.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're right</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Then who's the real enemy?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If yer gonna kill me, do me a solid and make it quick.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Aren't you scared?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'll have some more fun first.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I won't make you suffer.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If you ask me, it's a lot more fun ta go chasin' after younger ladies, but...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>This is true.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's not very fun.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You dirty old man.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If you capture me, what you going to do to me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Take pride in capturing you</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Use you to decorate the hall</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Nothing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If your girlfriend asked if you wanted to have dinner with "everybody", what you you say?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sure.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm busy.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If your girlfriend asked if you were free to have dinner with her "friends", what would you say?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sure.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm busy.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">If your parents could see you now, I'm sure it would break their hearts...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You might be right...</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>This doesn't involve them.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Actually, they'd rejoice.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'll go out with you just for today if there are no strings attached.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>If it pleases you.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No strings attached?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I've got enough on my plate...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm a super popular Shadow, you hee-know. My fans won't just sit around and take this, ho.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Please forgive me.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Fans?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>So what?</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm busy, ho. It's tough being so popular.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You do sound busy.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Your popularity won't last.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Who cares?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm inclined to turn you down, but if you still wish to speak, I will perhaps consider it.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You have nothing I want.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Do you have time?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Don't turn me down.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm just putting this out there, but you wouldn't treat me this way if I were younger, right? ...It's true, isn't it?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not true.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Maybe.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Cougars are all the rage now.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...I'm not going to go easy on you for doing something like this, you know...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Prepare for the worst.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>How much do you want?</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm not the one you should want to shoot...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You've got a point there...</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Not necessarily.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Anyone will do.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm sure a miracle's gonna happen to me, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Miracles don't exist.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'd be jealous if it did.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm waiting.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm sure there're other people in the world who'd irritate you more. C'mon, tell me.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Older people trying to look young.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No one bothers me.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I hate everyone.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm thinking that maybe I should act more grandmotherly. How can I go ahead and do that for you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Make me a homemade meal.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Scold me every so often.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You don't have to do anything.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm tired of being a kid. Didn't you feel that way when you were little, too?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sure did.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Not really.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I want to be a kid forever.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I'm well-connected, okay? I know some people that are pretty complicated.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I want to meet them.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Complicated...?</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Liar.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">In the end, killin' me's just a waste of yer time and energy. You get what I'm sayin', right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>When you put it that way...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's not a waste.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Enemies must be eliminated.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it because I'm not acting mature enough? Like, what the heck makes someone mature, anyway?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Being old enough to drink.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Paying your own rent.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Questioning maturity.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it 'cause I wasn't a "good kid"?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yes.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It has nothing to do with this.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it just me, or does something stink?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's just you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's coming from you.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I smell a lie.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it not a breeding ground for impudent humans? How do you view this world of yours?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Full of corrupt adults.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Plenty of places to shop.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Looks normal to me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it not possible for this series of events involving you and me to be attributed to that?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Fair enough.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>That is incorrect.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD / OK</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it okay if I get mad right now?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Do it.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Please don't.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're so cute.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it only for men? Where did you get it?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Do you want it?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Internet shopping.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's not available for sale.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is it scary to get a shot? Does it make you cry, mister?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I did.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I endure it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I like shots.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is there a reason why I just can't beat you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm younger, that's all.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I've totally got girl power.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Figure it out yourself.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Is there really any benefit for me if I joined with you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I think there is.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I can't promise that.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's a matter of feeling.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Isn't that just like when a human woman gets married and moves in with her husband?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I love someone else.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Isn't that kinda... outdated thinking? </th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yea.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No way.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's for your own good.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Isn't that kinda... outdated thinking? </th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sorry. </td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's for your own good. </td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's timeless. </td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It is to become aware of the gaze of our Father, who watches over you with loving grace.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I don't understand.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I feel his gaze.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I prefer a harsher stare.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It look like you corner me... But how me know this not trick? How me know you really winning?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Because it's the truth.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's a lie.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It seems the Son of Man have denounced the word of our father. Tell me, what worth have you found?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I noticed.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can survive alone.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Find it for me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It'd prolly be a big downer if the birthday boy didn't show to his party, sooo...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Happy birthday.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I had no idea.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>This'll be your deathday too.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It's clichéd, but we could talk about life... Ask each other things like what sort of girls we're into...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I like older women.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No preference.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I like men.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...It's fine. Do as you please.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I need your help.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Lick my boots.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Are you sure it's fine?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It's hard to tell under the mask, but... you're actually handsome, aren't you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>How did you know?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No, not all.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I look ok, I guess.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It's no fun going home when only my annoying mom and dad are there.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Parents are annoying.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You should love your parents.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Why not come to my place?</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">It's pretty rude, man.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>No it isn't.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's part of my face.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>My apologies.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I've been projecting a "don't speak to me" aura towards you.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I noticed.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I didn't feel an "aura."</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>But we may never meet again.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">I've heard that love can bloom anywhere, even on a battlefield. Don't you think that's possible?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Can it?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Definitely not.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What are you saying?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Just thinkin' about hierarchy, you should be showin' me a little more respect, shouldn't you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right, Senpai.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I never thought about it.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I prefer mutual respect.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Know how they say, "Be kind ta yer elders"? Has no one ever taught ya that?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Someone did once.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't care.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I don't want to grow old.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Let me hear you utter words of repentance.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>"Words of repentance."</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Not sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Life's nothing but pain anyways. Just do whatever you want.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You should have stayed home.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You won't die easily.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't get desperate.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Man, I'm about ta be a victim of that too. Hell, does this country even have a future?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It does.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Don't expect it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>The elderly have bad manners.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Maybe I should try something new! I don't want to fall into mediocrity, ho...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're fine as is.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Your act is a bit stale...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Time for a makeover.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Maybe I'll call the police. Maybe I'll tell 'em that you were worse than you actually were!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Call them. I dare you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Forgive me.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It was self-defense.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Maybe kids got spanked a long time ago, but people don't do that anymore, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I didn't know that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You need a good spanking.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Some things are timeless.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me am really in soup, now. Do what you want. Me am ready if you want grill me, so...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'll make you into soup.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't want to eat you.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'll mince you.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me guessing you have power that me not have. But what is it...?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Academics.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Empathy.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Girl power.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me not curse you, but me curse your commander! Me curse the one who order you...!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>This was my choice.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Fighting me is bad luck.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Just try to escape.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me not understand in what way you superior to me...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Youthfulness.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Cuteness.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Luckiness.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me really want to eat something.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Do not mock me.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Same goes for me</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Want something delivered?</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me want to ask some recommendations, so me can at least imagine.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Bread soaked in coffee.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't have any.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Hunger is the best ingredient.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Me want you to give me some nice "words of compassion"-as my rival- as me pass away...!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Die in peace.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Why show mercy to my enemy?</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>...I got nothing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">My chest is beating so fast. What is this feeling?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Are you alright?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're making it up.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's love.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">My horoscope said I was going to have "relationship difficulties" today.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Looks like it came true.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's just a horoscope.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>How is your luck in romance?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">My only choice now... is to retire, ho.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's too far.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>What are your plans?</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You had a good run...</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">No matter the crime, humans treat it more lightly if the perpetrator is a minor, do they not? Ah, so I suppose you commit such extreme acts because you know you won't be punished harshly…</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Age doesn't matter.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>This isn't extreme.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Now, people don't even know who lives next door to them. Shouldn't we know our neighbors better?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's saddening.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't really think about it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Privacy is important.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Oh, they're so self-assured that they'll be so successful in the future. Are you like that, child?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's not true.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What's wrong with that?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Ooh, what if this leaves a scar and it's permanent?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sorry...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Just get plastic surgery.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'll take responsibility.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Out of respect for our Father, let us take a moment's respite...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>If it's what you want.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>What are you telling me?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm a minor.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Seriously, cosplaying in a place like this? Are you just bored outta your mind?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I am.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm actually very busy.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Shut up!</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">She said, "I'll buy it for you on the way home," but she didn't but it for me! Isn't that not fair?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's unfair.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's your fault for being tricked.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Be more persistent.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">She said, "I'll buy it for you on the way home," but she didn't buy it for me! That's SO unfair, right?!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's not fair.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's your fault for being tricked.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I'll buy it for you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...So, I'm sorry, but can I go and fix my bangs first?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Quit joking around.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're fine as you are.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's pointless.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So... I'm sorry, but can I go and fix my bangs first? </th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Quit joking around.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're fine as you are.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's pointless.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So me am going to haunt you for the rest of your life. Me always right behind you...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That would be troublesome.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I could carry that weight.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't get it...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...So uh, instead of killin' me, you started chattin' with me... You tryin' to get somethin' from me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yup.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>No... Nothing at all...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Dance for me!</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...So? What's going to happen to me now?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You'll be killed.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What do you want to happen?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's a secret.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So? What's gonna happen to me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'll make mincemeat of you.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll play nice.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll be your dominatrix.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So who're you tryin' to impress with that mask?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Nobody.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Shuddup...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm actually still young...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So why me in this situation right now? Why me at your mercy?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Times have changed.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Humans are powerful.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>This is a difficult topic...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">So... You enjoy teasing older women like this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I had no intention. </td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It is fun, actually.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm serious.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Some old people refuse to make use of special seats reserved for the elderly. What do you think of that?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>No problem with it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>They shouldn't push themselves.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>They must be young inside.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Somethin' bad happen in yer life or somethin', sonny?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's not like that.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I got bad luck.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Something about people putting honey on cucumbers to feel like they're eating fancy cantaloupe?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I follow those tips.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's depressing.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Never heard of that.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Sorry, but I want you to go hee-home now. I'm already feeling so tired and weary, ho...</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sorry.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You go home.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Taking that into consideration, do you still want me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I didn't think that far.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>The feelings will come.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Tell me, what does "equal footing" mean to you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Not talking down to people.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Sharing household chores.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Splitting all the costs.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">That is to say, we are brothers. There is no reason for us to fight.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Leave my parents out of this.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>You may be right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>But you're a Shadow.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">That power, it originates from our Father. Thus, is it not reasonable to repay him for the favor?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I never considered it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>This power is all mine.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">That's wack, man. Maybe you should get your head checked out.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I probably should.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Now way.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm going feral!</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...The least I can do is extend this small mercy. Name a calamity you can bear.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Make it crowded where I shop.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Give me violence.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No calamities, please.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">The truth is... You're a good person, aren't you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I get that a lot.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Actually... I'm bad.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Are you mocking me?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">The way you treat me, though, is giving me mixed messages. How to you really feel about me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're beautiful.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're scary.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing in particular.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">There something you want say to me, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I want you.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Not really.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Let me touch your paw.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">They always give the guy a katsudon! You got anything like that for me!?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Katsudon, coming right up.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm the interrogator here.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I have nothing for you.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">They wear sleeveless shirts in the winter, right? What do you think about that, dearie?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's what's in.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's horrible.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't care.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Think carefully. I am not the one you should detest.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's absurd.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I’ll be the judge of that.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Think carefully. I cannot be destroyed. Desist from this pointlessness.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's absurd.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Then I shall desist.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">This is all some kind of TV thing, hee-ho! Where's the camera?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Wow, you got me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What's all this now?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>This is real.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">This is that "domestic violins" thing, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's "domestic violence."</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What? No, you're wrong...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Um, are things okay at home?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">To tell you the hee-truth, this is all an act, ho. What do you think I'm really like, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I can't image it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't care.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're fine as is.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">To view me as an enemy is to incur our Father's wrath. Man's future rests in your hands.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Leave the future to me.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I need your guidance.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't get it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Today I have what you humans call a girl's night out.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Quit messing with me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Should I go instead?</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Girls...?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Um, this has been buggin' me for a while, but... Is it me, or does something stink?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's just you.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's coming from you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I smell a lie.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Um, why're you going' for me? Ain't there worse people out there? What kind of guys piss you off?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Slow walkers.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Loud talkers...</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Nobody.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Very well. In the place of our Father, I shall listen to your complaints.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Why can't we end war?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No complaints here.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I can't get a girlfriend.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Vow that you will use that power in the name of our Father.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'll think about it.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No need to be so dramatic.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I decline.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Well, I need to see myself home soon... </th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Go home then.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What do you mean?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Let's go home together.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Well, I'm still here... That guy is really keeping me waiting.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Life isn't like fairy tales.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Just wait a little longer.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>You'll never meet him.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">We'll just say you win. So can we stop this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I feel bad.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't agree with this.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Everyone wins.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Well, quite frankly... No one wants you here. You do understand that, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I know.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I didn't know that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Who cares?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What are we gonna do, huh?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Tag.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK/BAD?</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't feel like playing.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Cruise for chicks.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What did I do to deserve this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's karma for your evil deeds.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Don't play the victim.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing in particular.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What did you want, coming all the way to a place like this?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A thrilling adventure.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>A treasure hunt.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Slaughter.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What do ya usually eat?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Curry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>All sorts of things.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Protein.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What do you hope to accomplish by injuring me further...?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>More sleep.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Popularity.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>There's no end if I start.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What do you think about humans showing pictures of their baby to others?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's cute.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not interested.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>What are you talking about?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What do you think I should wear? I admit it, I wanna draw some attention to myself.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>High School uniform.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>A Kimono.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't wear anything.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What has brought you to a place like this? What are you seeking?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>An adventure.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing, really.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>A killing spree.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What if I was a human? Then, what you're doing... well, it'd be a criminal act!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's true...</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>That can't be true.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's irrelevant.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What in the hell are ya tryin' ta tell me, anyway?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're going to die.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Why do we fight?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't really know...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What is irritating you so much?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Rotten adults.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Egotistical women.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not irritated.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What kinda "fate" do ya think there is in this meetin' between me and you?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Fate brought us together.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>There is no such thing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I want to end this fate.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What kinda "hospitality" will you show me at the end of my life?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You won't suffer long.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>A coupon for a massage by me.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'll be at your side until the end.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What kinda guys piss you off?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Pissy guys.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Guys with no sense of humor. </td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I never get mad. </td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What was that, anyway?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A love letter.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>A threat letter.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>A coupon.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What was... the cause of my defeat?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Your lack of resolve.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Just bad luck.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not telling.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What you thinking now?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>How to negotiate..</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Nothing.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>How can I get popular?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What're you gonna tell your kids about this shit?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It was a hard-fought battle.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It was an easy win.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll forget it happened.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What's it like to be all kissy face with somebody?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>It's incredible...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I shouldn't tell you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Ask your parents.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">What's wrong with the way I look, huh?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You tempt people.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're ugly.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Nothing's wrong.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">When I was young, I could make anyone back off-if they were smart enough-with just my glare.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's so neat.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm just that good.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You've grown old.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">When it came right down to it, you couldn't do anything to me!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I could.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>How could you tell?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What do you want me to do?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">When you eat curry, mister, what do you like to add?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Soy sauce.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Worcestershire sauce.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't add anything.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">When you were little, what did you wanna be when you grow up?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A pro athlete.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I had no dream.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>A winner in society.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Where do babies come from?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Storks deliver them.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Ask your parents.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>The love between two people.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Where should I go? I want something yummy, ho!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>A place with no wait.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>A place with western toilets.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You won't survive.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Who the blazes do you think you are?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I feel bad about that.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm ME!</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't owe you an answer.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why are you so interested in me, anyway?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>If it pleases you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>[…]</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>[…]</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why did you come to this dangerous place? Isn't it safer in the real world?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I've got business here.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm here for the loot.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Just 'cause.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why do they like "making out"?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>How should I know?</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can't tell you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Ask your parents.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why have you decided to be more communicative with me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Your looks.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You seemed useful.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No particular reason.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why you come all the way here?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>For a treasure hunt.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>For girls.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I just felt like it.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why you fight and put yourself in harm's way?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I want to get stronger.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Because I see an enemy.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I don't actually know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why you keep trampling here? What you humans thinking?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm sorry.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Should I take off my shoes?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why you not care for me like that? Why you treat me like this, then?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You look scary.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I want to cherish you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You're not a beast.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why you wear mask to fight, anyway?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I care about my looks.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It keeps my foes' blood off.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>That's what I want to know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Why're you so desperate?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I don't want to die.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>There's something I must do.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I want girls to like me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Won't you just leave me be?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Fine, I will.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I can't just leave you.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Is that reverse psychology?</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Would you be willing to spend time and money to see people you haven't contacted for years?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I suppose so.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Sounds like a drag.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No one invites me to reunions.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Would you do to anyone else what you're doing to me now?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I sure would.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No, I wouldn't.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>This is a special exception.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Wouldn't your girlfriend get jealous if she could see us?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>No need to worry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's only bad if I get caught.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't have a girlfriend.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">Y'know, if I'm gonna be killed, I'd rather be offed by a beautiful, classy lady.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Sorry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>You don't get to be picky.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's all the same.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">...Y'know what I'm gettin' at, right? Ya think ya could let me go see my girl?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Nope.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'll consider it.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What kind of girl is she?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You better enjoy and be drunk on victory while you can. It not last long.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'll just keep winning.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're just a sore loser.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I can't drink, I'm underage.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You carry a gun because you think it'll make you more popular with the girls?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It won't?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's for self-improvement.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You didn't stray from the path or get lost?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I downloaded an app.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Well, I got a little lost.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't remember.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You do realize it's useless to go waving that thing around aimlessly.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I know.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't act so tough.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Not as useless as you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You do understand that we are here because of people like you, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I never thought of that.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I understand.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>What do you mean?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You given much thought, what if you go to place where you could die at any moment?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I've thought about it.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't want kids.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not comfortable with this.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You go back to your mother's arms. You need take nap now.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm not that young.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm not sleepy.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>After I'm done with this.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You had something you lost, and you not know how important it was until after it gone, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>My pal who switched schools.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>My ex-girlfriend...</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>Quiet, I'm killing you now.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You have appeared to test my adoration of our Father. Yes, you are... the Tempter</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You got me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're mistaken.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Are you okay?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You have wishes you not can let go of, even after you die?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Everyone's happiness.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>A grand funeral.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I won't die.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You, however are talking to me right here. Are you the exception to this rule?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm not special.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I have ulterior motives.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You knocked me down, and now my goddamn watch is broken!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>My apologies.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Like I care.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>You should "watch" your mouth.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You know, a mascot's life isn't hee-easy. Are you sure you could handle all the adversity, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm ready for it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What kind of adversity?</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>You're a mascot?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You know, if I were to whip something up for you, what would you want?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Meat and potatoes.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I don't need homemade food.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Can you actually cook?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You know, if you're willin' to let this go... I'll make it worth your while.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Worth my while?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No, thanks.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I already get enough, actually.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You must be one of those delinquents I hear about. Do you have poor grades in school?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm a straight-A student.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>They're not great...</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>At least I'm popular.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You new? Did you get hee-hired, ho?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Yeah! Nice you meetcha!</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm a transfer student.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You not worry you get in trouble if those groups hear what you are doing to me?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's true.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I don't mind.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's for love.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You were so sure of yourself, so it's embarrassing now to admit you're struggling here. Right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Don't make fun of me.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You, who reside in that world of the almighty, what is it that has beleaguered you so?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Omnipotent?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm not beleaguered.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>There's someone I want to save.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You will receive punishment for treating me this way, mark my words.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm sorry.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>I'm prepared for the worst.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>How much do you want?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You'd have no idea I was about to use my ultimate move.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>For real!?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>That's worrying... </td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>...Try me.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You'll have a bleak future if you spend too much time running around pretending to be a phantom thief.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Thank you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Don't worry about it.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>It's worth it.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You'll probably break down in tears when you see my angry face. I'm a real monstrosity, ho!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's scary...</td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I would never cry.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>I want to see your fury.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're a big bully! don't you think that's "immature"?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Now that you mention it...</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>No, I don't think so.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm not mature anyway.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're hitting on me, right? Don't you think you're totally doing it wrong?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>Nothing wrong about it.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>What's the right way, then?</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm not hitting on you.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're lucky it was just me. You can't do anything like this in the real world, right?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>That's right.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I choose my targets carefully.</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I'm serious about this.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're showing off your strength to me, aren't you? I total-hee read your mind, ho.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You're misunderstanding.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>The hell are you saying?</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>Make me your apprentice.</td>
		<td class="result unconfirmed"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're s'posed to go easy on kids! Are you stupid? Do you go to school and get stupid grades?</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I'm smart.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>I'm good at PE.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>Shut up.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5">You're violatin' the weapons code or whatever, man.</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>I didn't know.</td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
	</tr>
	<tr>
		<td>It's for self-defense.</td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
	<tr>
		<td>Pretty cool, huh?</td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">OK</div><div class="symbol">💦</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
</table>
<table>
	<tr>
		<th colspan="5"> ...You've come from some other company to scout me-hee out. There's no mistaking it, ho!</th>
	</tr>
	<tr>
		<td></td>
		<td class="subheader">gl<span class="extra">oomy</span></td>
		<td class="subheader">ir<span class="extra">ritable</span></td>
		<td class="subheader">ti<span class="extra">mid</span></td>
		<td class="subheader">up<span class="extra">beat</span></td>
	</tr>
	<tr>
		<td>You got me.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
		<td class="result"><div class="text">GOOD</div><div class="symbol">🎶</div></td>
	</tr>
	<tr>
		<td>It's a misunderstanding.</td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
	</tr>
	<tr>
		<td>I've come to finish you off.</td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result"><div class="text">-</div><div class="symbol"></div></td>
		<td class="result unconfirmed"><div class="text">BAD</div><div class="symbol">💢</div></td>
	</tr>
</table>
</div>
`;

//source: https://aqiu384.github.io/megaten-fusion-tool/p5r/personas
const fusionCalculator = `
<embed src="https://aqiu384.github.io/megaten-fusion-tool/p5r/personas">
`;

//source: https://aqiu384.github.io/p5r-walkthrough/confidants
const confidantGuide = `
<h2 id="confidantGuideHeading">Confidant Guide</h2>

<details id="confidantAvailability">
    <summary>
        <h3 id="confidantAvailabilityHeading">Confidant Availability</h3>
    </summary>

    <details id="aprilAvailability">
        <summary>
            <h4>April</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sat</td>
                    <td>4/9</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>4/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>4/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>4/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>4/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>4/14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>4/15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>4/16</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>4/17</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>4/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>4/19</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>4/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>4/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>4/22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>4/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>4/24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>4/25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>4/26</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>4/27</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>4/28</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>4/29</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>4/30</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="mayAvailability">
        <summary>
            <h4>May</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sun</td>
                    <td>5/1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>5/2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>5/3</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>5/4</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>5/5</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>S2</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>5/6</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>S5</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A1</td>
                    <td>0.1</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>5/7</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>5/8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A2</td>
                    <td>0.2</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>5/9</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>0.3</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>5/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>5/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>5/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>5/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A1</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>5/14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A2</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>5/15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>5/16</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>5/17</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>5/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>5/19</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>5/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>S3</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>5/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>5/22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>5/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>5/24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>0.1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>5/25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>5/26</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>5/27</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>5/28</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>5/29</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>5/30</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>A1</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>5/31</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="juneAvailability">
        <summary>
            <h4>June</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Wed</td>
                    <td>6/1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>6/2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>6/3</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>6/4</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>6/5</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>6/6</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>6/7</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>6/8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>S2</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>6/9</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>6/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>A1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>6/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>6/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>6/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>6/14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>6/15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>6/16</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>6/17</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>6/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>6/19</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>6/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>6/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>6/22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>0.1</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>6/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>0.2</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>6/24</td>
                    <td>S1</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>0.3</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>6/25</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>S1</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>6/26</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>6/27</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>6/28</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>6/29</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>6/30</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="julyAvailability">
        <summary>
            <h4>July</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fri</td>
                    <td>7/1</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>7/2</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>7/3</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>7/4</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>7/5</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>7/6</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>7/7</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>7/8</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>7/9</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>7/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>7/11</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>7/12</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>7/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>7/14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>7/15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>7/16</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>7/17</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>7/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>7/19</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>7/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>7/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>7/22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>7/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>7/24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>7/25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>7/26</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>7/27</td>
                    <td>O</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>7/28</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>7/29</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>7/30</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>7/31</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="augustAvailability">
        <summary>
            <h4>August</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mon</td>
                    <td>8/1</td>
                    <td>O</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>8/2</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>8/3</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>8/4</td>
                    <td>O</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>8/5</td>
                    <td>.</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>8/6</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>8/7</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>8/8</td>
                    <td>.</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>8/9</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>8/10</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>8/11</td>
                    <td>O</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>8/12</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>8/13</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>8/14</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>8/15</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>8/16</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>8/17</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>8/18</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>8/19</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>8/20</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>8/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>8/22</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>8/23</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>8/24</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>8/25</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>8/26</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>8/27</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>8/28</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>8/29</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>8/30</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>8/31</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="septemberAvailability">
        <summary>
            <h4>September</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Thu</td>
                    <td>9/1</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>S5</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>9/2</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>S2</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>9/3</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>S6</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>9/4</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>0.1</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>9/5</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>S1</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>9/6</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>9/7</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>9/8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>9/9</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>9/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>9/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>9/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>9/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>9/14</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>9/15</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>9/16</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>9/17</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>9/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>9/19</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>9/20</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>S6</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>9/21</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>9/22</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>9/23</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>9/24</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>9/25</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>9/26</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>9/27</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>9/28</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>9/29</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>9/30</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="octoberAvailability">
        <summary>
            <h4>October</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sat</td>
                    <td>10/1</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>10/2</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>10/3</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>10/4</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>10/5</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>10/6</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>10/7</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>10/8</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>10/9</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>10/10</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>10/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>10/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>10/13</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>10/14</td>
                    <td>HG</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>10/15</td>
                    <td>O</td>
                    <td>-</td>
                    <td>HG</td>
                    <td>.</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>10/16</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>10/17</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>10/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>10/19</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>10/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>10/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>10/22</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>10/23</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>10/24</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>10/25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>10/26</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>10/27</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>10/28</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>10/29</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>10/30</td>
                    <td>O</td>
                    <td>S1</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>10/31</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="novemberAvailability">
        <summary>
            <h4>November</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tue</td>
                    <td>11/1</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>11/2</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>S7</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>11/3</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>11/4</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>11/5</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>11/6</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>11/7</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>11/8</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>11/9</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>11/10</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>11/11</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>11/12</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>11/13</td>
                    <td>O</td>
                    <td>HG</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>E10</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>11/14</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>11/15</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>11/16</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>11/17</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>E8</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>E9</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>11/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>A10</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>11/19</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>11/20</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>11/21</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>11/22</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>11/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>11/24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>11/25</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>11/26</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>11/27</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>11/28</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>11/29</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>11/30</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="decemberAvailability">
        <summary>
            <h4>December</h4>
        </summary>
        <p>Moon is locked until the Cruiser Palace is cleared.</p>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Thu</td>
                    <td>12/1</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>12/2</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>12/3</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>12/4</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>12/5</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>12/6</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>12/7</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>12/8</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>12/9</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>12/10</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>12/11</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>12/12</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>12/13</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>12/14</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>X</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>12/15</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>12/16</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>X</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>12/17</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>12/18</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>12/19</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>12/20</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>12/21</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>12/22</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>E5</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>12/23</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>12/24</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>12/25</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>12/26</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>12/27</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>12/28</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>12/29</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>12/30</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>12/31</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="januaryAvailability">
        <summary>
            <h4>January</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Sun</td>
                    <td>1/1</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>1/2</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>1/3</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>1/4</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>1/5</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>1/6</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>1/7</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>1/8</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>1/9</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>1/10</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>1/11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>1/12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>1/13</td>
                    <td>.</td>
                    <td>.</td>
                    <td>S11</td>
                    <td>.</td>
                    <td>S11</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>S6</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>1/14</td>
                    <td>S11</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>S11</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>1/15</td>
                    <td>.</td>
                    <td>S11</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>S11</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>1/16</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>1/17</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>1/18</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>1/19</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>1/20</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>1/21</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>1/22</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>1/23</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>1/24</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Wed</td>
                    <td>1/25</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>1/26</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Fri</td>
                    <td>1/27</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sat</td>
                    <td>1/28</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Sun</td>
                    <td>1/29</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Mon</td>
                    <td>1/30</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>-</td>
                    <td>.</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Tue</td>
                    <td>1/31</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>.</td>
                    <td>O</td>
                    <td>.</td>
                    <td>.</td>
                    <td>O</td>
                    <td>-</td>
                    <td>.</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>

    <details id="februaryAvailability">
        <summary>
            <h4>February</h4>
        </summary>
        <table>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Pri</th>
                    <th>Eps</th>
                    <th>Epo</th>
                    <th>Hie</th>
                    <th>Lov</th>
                    <th>Cha</th>
                    <th>Jus</th>
                    <th>Her</th>
                    <th>For</th>
                    <th>Han</th>
                    <th>Dea</th>
                    <th>Tem</th>
                    <th>Dev</th>
                    <th>Tow</th>
                    <th>Sta</th>
                    <th>Moo</th>
                    <th>Sun</th>
                    <th>Fai</th>
                    <th>Cou</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Wed</td>
                    <td>2/1</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Thu</td>
                    <td>2/2</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>O</td>
                    <td>O</td>
                    <td>A11</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>O</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>S11</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </details>
</details>

<details id="confidantGifts">
    <summary>
        <h3 id="confidantGiftsHeading">Confidant Gifts</h3>
    </summary>

    <h4 id="giftoverview">Gift Overview</h4>
    <ul>
        <li>Gifts can only be given during a player-initiated non-ranking hangout event</li>
        <li>Gift prompt will only appear if there are not enough confidant points to trigger next ranking event</li>
        <li>Gift prompt will always appear after Rank 10</li>
        <li>All gifts yield at least 1 confidant point without a matching arcana and 2 points with a matching arcana
        </li>
    </ul>

    <h4 id="giftaffinity">Gift Affinity</h4>
    <table>
        <thead>
            <tr>
                <th>Store</th>
                <th>Gift</th>
                <th>Price</th>
                <th>Pri</th>
                <th>Eps</th>
                <th>Epo</th>
                <th>Hie</th>
                <th>Lov</th>
                <th>Cha</th>
                <th>Jus</th>
                <th>Her</th>
                <th>For</th>
                <th>Han</th>
                <th>Dea</th>
                <th>Tem</th>
                <th>Dev</th>
                <th>Tow</th>
                <th>Sta</th>
                <th>Fai</th>
                <th>Cou</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Rocinante</td>
                <td>Snack Pack</td>
                <td>5800</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Rocinante</td>
                <td>Cup Noodle Set</td>
                <td>3480</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Rocinante</td>
                <td>Omni-Vitamin</td>
                <td>4500</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Tsurukame Diamond</td>
                <td>Heart Ring</td>
                <td>88000</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Tsurukame Diamond</td>
                <td>Silver Bangle</td>
                <td>78000</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Body Chop</td>
                <td>Designer Perfume</td>
                <td>7800</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Body Chop</td>
                <td>Luxury Aroma Set</td>
                <td>3800</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Body Chop</td>
                <td>Crimson Lipstick</td>
                <td>6000</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
            </tr>
            <tr>
                <td>High Sense</td>
                <td>Book Cover</td>
                <td>3000</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
            </tr>
            <tr>
                <td>High Sense</td>
                <td>Glass Vase</td>
                <td>3200</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>High Sense</td>
                <td>Sakura Fan</td>
                <td>4800</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Taisho Store</td>
                <td>Uji Matcha Flan</td>
                <td>2400</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Taisho Store</td>
                <td>Truffles</td>
                <td>2800</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Taisho Store</td>
                <td>Castella</td>
                <td>1500</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Next Ace</td>
                <td>Wrist Weights</td>
                <td>6800</td>
                <td>2</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Next Ace</td>
                <td>Sports Sunglasses</td>
                <td>12000</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Mitsubachi Bungu</td>
                <td>Watercolor Postcard</td>
                <td>800</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Mitsubachi Bungu</td>
                <td>Fountain Pen</td>
                <td>8000</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Mitsubachi Bungu</td>
                <td>Leather Pen Case</td>
                <td>12000</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Sukebe (Night Only)</td>
                <td>Mini Cactus</td>
                <td>1600</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Sukebe (Night Only)</td>
                <td>Flower Basket</td>
                <td>2400</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Sukebe (Night Only)</td>
                <td>Bath of Roses</td>
                <td>3200</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>Black Mug</td>
                <td>1800</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>Star Mirror</td>
                <td>4000</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>Kitchen Tools Set</td>
                <td>4900</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>48-Sided 3D Puzzle</td>
                <td>3200</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>Puzzle Rings</td>
                <td>4700</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Mran Mran</td>
                <td>Mochi Cushion</td>
                <td>6500</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Robot Vacuum</td>
                <td>44800</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Digital Camera</td>
                <td>39800</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Face Beautifier</td>
                <td>9800</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Electric Toothbrush</td>
                <td>29800</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Blaring Alarm Clock</td>
                <td>12000</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>3</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Akindo</td>
                <td>Aroma Machine</td>
                <td>18000</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Tokobushiya</td>
                <td>Motorbike Figure</td>
                <td>4800</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Tokobushiya</td>
                <td>Local Mascot Set</td>
                <td>3600</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Tokobushiya</td>
                <td>Idol Pins</td>
                <td>3000</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Tokobushiya</td>
                <td>Katana Keychain</td>
                <td>500</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
                <td>-</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
</details>

<details id="confidantEvents">
    <summary>
        <h3>Confidant Events</h3>
    </summary>

    <details id="fool">
        <summary>
            <h4>Fool</h4>
        </summary>
        <h4 id="availability">Availability</h4>
        <ul>
            <li>Confidant: Igor</li>
            <li>Location: None</li>
            <li>Time of Day: None</li>
            <li>Day of Week: None</li>
            <li>Rank 10 NG+ Gift Carryovers: None</li>
        </ul>
        <h4 id="abilities">Abilities</h4>
        <p>Increases persona stock and arcana burst.</p>
        <ol>
            <li>Multiple Unlocks<ol>
                    <li>Wild Talk: Can negotiate with enemies during Hold Up.</li>
                    <li>Arcana Burst: Fused personas gain additional EXP corresponding to their arcana's Confidant rank.
                    </li>
                </ol>
            </li>
            <li>Third Eye: Hold L1 to see hidden things both in overworld and Metaverse.</li>
            <li>Power Stock: Increases persona stock to 8.</li>
            <li>-</li>
            <li>Super Stock: Increases persona stock to 10.</li>
            <li>High Arcana Burst: Increases EXP from Arcana Burst.</li>
            <li>-</li>
            <li>Ultra Stock: Increases persona stock to 12.</li>
            <li>-</li>
            <li>Max Arcana Burst: Greatly increases EXP from Arcana Burst.</li>
        </ol>
        <h4 id="progression">Progression</h4>
        <p>Tied to game progress.</p>
        <ul>
            <li>Rank 1: 4/12</li>
            <li>Rank 2: First non-scripted infiltration of Castle Palace.</li>
            <li>Rank 3: 5/5</li>
            <li>Rank 4: After clearing Museum Palace.</li>
            <li>Rank 5: 6/11</li>
            <li>Rank 6: After clearing Bank Palace.</li>
            <li>Rank 7: 8/22</li>
            <li>Rank 8: 8/31</li>
            <li>Rank 9: 10/11</li>
            <li>Rank 10: 12/24 and Good End or better.</li>
        </ul>
    </details>

    <details id="magician">
        <summary>
            <h4>Magician</h4>
        </summary>
        <h4 id="availability-1">Availability</h4>
        <ul>
            <li>Confidant: Morgana</li>
            <li>Location: None</li>
            <li>Time of Day: None</li>
            <li>Day of Week: None</li>
            <li>Rank 10 NG+ Gift Carryovers: Pickpocket</li>
        </ul>
        <h4 id="abilities-1">Abilities</h4>
        <p>Learn to craft infiltration tools.</p>
        <ol>
            <li>Infiltration Tools: Can craft basic tools.</li>
            <li>-</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Kitty Talk: Chance to retry enemy negotiation after failure with an animal-type Shadow.</li>
            <li>Pickpocket: Chance to steal drop item from enemy when using melee attack.</li>
            <li>Ace Tools: Can craft all tools.</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-1">Progression</h4>
        <p>Tied to game progress.</p>
        <ul>
            <li>Rank 1: 4/15</li>
            <li>Rank 2: While clearing Castle Palace.</li>
            <li>Rank 3: After clearing Museum Palace.</li>
            <li>Rank 4: 6/20</li>
            <li>Rank 5: After clearing Bank Palace.</li>
            <li>Rank 6: 7/25</li>
            <li>Rank 7: 8/29</li>
            <li>Rank 8: 9/17</li>
            <li>Rank 9: After clearing Spaceport Palace.</li>
            <li>Rank 10: 12/23</li>
            <li>Rank 11: 1/10</li>
        </ul>
    </details>

    <details id="priestess">
        <summary>
            <h4>Priestess</h4>
        </summary>
        <h4 id="availability-2">Availability</h4>
        <ul>
            <li>Confidant: Makoto Niijima</li>
            <li>Location: Varies<ul>
                    <li>Schooldays: Shujin student council office</li>
                    <li>Holidays: In front of Shujin gate</li>
                    <li>After 11/26: Aoyama subway platform</li>
                </ul>
            </li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Tuesday, Thursday, Saturday, and Sunday</li>
            <li>Rank 10 NG+ Gift Carryovers: Shadow Factorization</li>
        </ul>
        <h4 id="abilities-2">Abilities</h4>
        <p>Provides additional enemy analysis.</p>
        <ol>
            <li>Shadow Calculus: Can see skills and potential item drops for enemy.</li>
            <li>-</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Black Belt Talk: Chance to retry enemy negotiation after failure with a martial arts-using Shadow.</li>
            <li>-</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Shadow Factorization: Displays X on target cursor when attempting an ineffective attack on enemy.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-2">Progression</h4>
        <p><strong>Rank 1 requires Bank Palace cleared and Knowledge Lv. 3 (Scholarly).</strong></p>
        <p>Rank 1</p>
        <p>Rank 2 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "You're very well informed." (+1)</li>
            <li>Choice 2: "That was dangerous." (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Couldn't agree more." (+1)</li>
        </ol>
        <p>Rank 3</p>
        <ol>
            <li>Choice 1: "You have the wrong idea." (+1)</li>
            <li>Choice 2: "You can change." (+2)</li>
            <li>(Phone) Choice 1: "Sounds like you two get along." (+1)</li>
        </ol>
        <p>Rank 4</p>
        <ol>
            <li>Choice 1: "That's unlike you." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "Why do you use it?" (+2)</li>
            <li>Choice 3: "It's an amazing goal." (+2)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 3: "He sounds suspicious." (+2)</li>
            <li>Choice 1: "I got this." (+2)</li>
            <li>(Phone) Choice 3: "Try to reach out to her." (+1)</li>
        </ol>
        <p><strong>Rank 6 Requires Charm Lv. 5 (Debonair).</strong></p>
        <p>Rank 6</p>
        <ol>
            <li>Choice 3: "Love comes in many forms." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Tell him you're on a date." (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "He was a noble man." (+3)</li>
            <li>Choice 2: "I'm sure he was happy." (+3)</li>
            <li>Choice 2: "You can figure that out now." (+1)</li>
            <li>Choice 1: "I'm game if you are." (+1)</li>
            <li>(Phone) Choice 1: "Of course." (+1)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 1: "He says that to all his girls." (+1)</li>
            <li>Choice 1: "Absolutely." (+2)</li>
        </ol>
        <p>Rank 9 (Friendship) (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "Your fight's with me." (+2)</li>
            <li>Choice 1: "We should get out of here." (+1)</li>
            <li>Choice 2: "That was the right move." (+1)</li>
            <li>Choice 1: "I'm a regular here." (+3)</li>
            <li>Choice 1: "You'll find someone someday." (+2)</li>
            <li>(Phone) Choice 1: "No problem at all." (+1)</li>
        </ol>
        <p>Rank 9 (Romance) (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "Your fight's with me." (+2)</li>
            <li>Choice 1: "We should get out of here." (+1)</li>
            <li>Choice 2: "That was the right move." (+1)</li>
            <li>Choice 1: "I'm a regular here." (+3)</li>
            <li>Choice 2: "I'll be your study partner." (+0)</li>
            <li>Choice 1: "I do." (+3)</li>
            <li>(Phone) Choice 1: "I'd do anything for you." (+1)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents">Other Events</h4>
        <p>Hangout Study-7/12 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 2: "This is difficult…" (+1)</li>
        </ol>
        <p>Hangout Movies (7/28 only) <strong>(Guts +5)</strong></p>
        <ol>
            <li>Choice 1: "Not at all." (+2)</li>
        </ol>
        <p>Hangout Ikebukuro (7/30 only, Pyramid Palace cleared)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "That helps." (Emperor +2)</li>
            <li>Choice 1: "Exactly." (+2)</li>
        </ol>
        <p>Hangout Jinbocho (8/15 only)</p>
        <ol>
            <li>Choice 1: "Let's get cracking." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Wow, this is useful information." (+2) (Star +2)</li>
        </ol>
        <p>Hangout Study-10/14 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 1: "I'm doing okay." (+1)</li>
        </ol>
        <p>Hangout Suidobashi</p>
        <ol>
            <li>Choice 3: "Let's go ride something." (+3)</li>
            <li>Receive Gi-Nyant Doll</li>
        </ol>
        <p>Hangout Chinatown</p>
        <ol>
            <li>Choice 3: "Spring rolls?" (+3)</li>
            <li>Choice 2: "Let's find some." (+2)</li>
            <li>Receive Shumai Cushion</li>
        </ol>
    </details>

    <details id="empress">
        <summary>
            <h4>Empress</h4>
        </summary>
        <h4 id="availability-3">Availability</h4>
        <ul>
            <li>Confidant: Haru Okumura</li>
            <li>Location: Shujin rooftop</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Irregular, Frequently appears on weekdays, Cannot be raining</li>
            <li>Rank 10 NG+ Gift Carryovers: Soil Improvement</li>
        </ul>
        <h4 id="abilities-3">Abilities</h4>
        <p>Can harvest battle support vegetable items.</p>
        <ol>
            <li>Cultivation: Unlocks vegetable cultivation.</li>
            <li>-</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Celeb Talk: Chance to retry enemy negotiation after failure with a group of Shadows.</li>
            <li>Bumper Crop: Increases harvest yield by 1.</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Soil Improvement: Decreases cultivation time.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-3">Progression</h4>
        <p>Rank 1</p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 3: "Are you starting a farm?" (+3)</li>
            <li>Choice 3: "He sounds suspicious." (+1)</li>
            <li>Choice 1: "This is a complex issue." (+2)</li>
            <li>(Phone) Choice 3: "Jewel Melon." (+2)</li>
        </ol>
        <p>Rank 3</p>
        <ol>
            <li>Choice 3: "It'll be okay, I promise." (+2)</li>
            <li>Choice 1: "I don't want to go with you." (+2)</li>
            <li>Choice 2: "Not yet." (+2)</li>
            <li>(Phone) Choice 1: "Smart response." (+2)</li>
        </ol>
        <p><strong>Rank 4 requires Proficiency Lv. 5 (Transcendent).</strong></p>
        <p>Rank 4</p>
        <ol>
            <li>Choice 3: "It must be amazing." (+2)</li>
            <li>Choice 3: "Cheers." (+3)</li>
            <li>Choice 2: "I can taste the elephant." (+3)</li>
            <li>Choice 3: "Let's ask him." (+2)</li>
            <li>Choice 3: "I'm not really sure." (+2)</li>
            <li>(Phone) Choice 3: "Let's get coffee again sometime." (+2)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 2: "Somebody's telling the truth." (+2)</li>
            <li>Choice 3: "There has to be another way." (+1)</li>
            <li>Choice 3: "I don't think so." (+2)</li>
            <li>(Phone) Choice 3: "Pinch yourself." (+2)</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>Choice 3: "Can you make some for me?" (+2)</li>
            <li>Choice 1: "I had no idea." (+2)</li>
            <li>Choice 3: "Black like coffee?" (+3)</li>
            <li>-</li>
            <li>Choice 2: "Be strong, Haru." (+3)</li>
            <li>(Phone) Choice 1: "You can talk to me anytime." (+2)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "What do you want to do?" (+2)</li>
            <li>Choice 3: "You should tell him that." (+3)</li>
            <li>Choice 2: "You can do it, Haru." (+3)</li>
            <li>(Phone) Choice 2: "I'll always have your back." (+2)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 1: "The soil?" (+2)</li>
            <li>Choice 2: "He's going to love it." (+3)</li>
            <li>Choice 2: "You're amazing, Haru." (+3)</li>
            <li>(Phone) Choice 3: "I want some too." (+2)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "Give it all you've got, Haru." (+3)</li>
            <li>Choice 2: "You did amazing." (+3)</li>
            <li>Choice 1: "He saw us as good friends." (+0)</li>
            <li>(Phone) Choice 2: "You sound happy." (+2)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "Give it all you've got, Haru." (+3)</li>
            <li>Choice 2: "You did amazing." (+3)</li>
            <li>Choice 2: "I like you too, Haru." (+0)</li>
            <li>(Phone) Choice 2: "I wanted to hear your voice." (+2)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-1">Other Events</h4>
        <p>Hangout Asakusa (11/6 only, Devil Rank 8 or lower or romance)</p>
        <ol>
            <li>Choice 2: "It was fun." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "There's nothing to fear." (+2) (Devil +2)</li>
            <li>Receive Kumade</li>
        </ol>
        <p>Hangout Movies (11/6 only) <strong>(Guts +5)</strong></p>
        <ol>
            <li>Choice 2: "I like them a lot." (+2)</li>
        </ol>
        <p>Hangout Tsukishima</p>
        <ol>
            <li>Choice 1: "We'll try together." (+3)</li>
            <li>Receive Giant Spatula</li>
        </ol>
    </details>

    <details id="emperor">
        <summary>
            <h4>Emperor</h4>
        </summary>
        <h4 id="availability-4">Availability</h4>
        <ul>
            <li>Confidant: Yusuke Kitagawa</li>
            <li>Location: Shibuya underground walkway</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Monday, Tuesday, Friday, and Sunday</li>
            <li>Rank 10 NG+ Gift Carryovers: Card Creation, Live Painting</li>
        </ul>
        <h4 id="abilities-4">Abilities</h4>
        <p>Can craft 1 skill card per day using a blank card.</p>
        <ol>
            <li>Card Duplication <strong>(Royal)</strong>: Can copy any skill card in inventory in 1 day.</li>
            <li>-</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Art Talk: Chance to retry enemy negotiation after failure with a lone Shadow.</li>
            <li>Card Creation <strong>(Royal)</strong>: Can recreate any previously copied skill card in 1 day.</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Live Painting <strong>(Royal)</strong>: Can instantly perform Card Duplication or Card Creation.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-4">Progression</h4>
        <p>Rank 1</p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 2: "It's enigmatic." (+1)</li>
            <li>Choice 1: "I can't wait." (+3)</li>
            <li>(Phone) Choice 1: "You're already doing enough." (+1)</li>
        </ol>
        <p>Rank 3 (Unlocks Ueno)</p>
        <ol>
            <li>Choice 3: "Don't let it bother you." (+1)</li>
            <li>-</li>
            <li>Choice 2: "This isn't like you." (+3)</li>
            <li>Choice 2: "That's the spirit." (+1)</li>
            <li>(Phone) Choice 1: "That's the spirit." (+1)</li>
        </ol>
        <p>Rank 4 (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "I should bring a girl here." (+1)</li>
            <li>Choice 1: "Love comes in all forms." (+2)</li>
            <li>(Phone) Choice 1: "Don't get discouraged." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 3: "Do you want me to strip?" (+3)</li>
            <li>Choice 1: "I'm sure you will." (+2)</li>
            <li>(Phone) Choice 3: "There's still hope." (+1)</li>
        </ol>
        <p><strong>Rank 6 requires Proficiency Lv. 4 (Masterful).</strong></p>
        <p>Rank 6 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "It feels nostalgic." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "I couldn't possibly tell you." (+3)</li>
            <li>(Phone) Choice 1: "He had a certain dignity." (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>-</li>
            <li>Choice 2: "What do you mean?" (+1)</li>
            <li>Choice 1: "The truth is within you." (+3)</li>
            <li>(Phone) Choice 1: "Calm down." (+1)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 3: "It has to be Ann." (+1)</li>
            <li>Choice 3: "You've really grown, Yusuke." (+2)</li>
        </ol>
        <p>Rank 9 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "Her love for her son." (+3)</li>
            <li>Choice 1: "You've really changed, Yusuke." (+3)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-2">Other Events</h4>
        <p>Hangout Leblanc-7/27 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 3: "A bit of everything!" (+2)</li>
        </ol>
        <p>Hangout Leblanc-8/1 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 1: "Just go to the library." (+2)</li>
        </ol>
        <p>Hangout Leblanc-8/4 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 1: "Let's go." (+2)</li>
        </ol>
        <p>Hangout Movies (8/5 only) <strong>(Kindness +5)</strong></p>
        <ol>
            <li>Choice 1: "I don't mind." (+2)</li>
        </ol>
        <p>Hangout Leblanc-8/8 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 1: "If I can find a good deal." (+3)</li>
        </ol>
        <p>Hangout Leblanc-8/11 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 1: "There's no way." (+2)</li>
        </ol>
        <p>Hangout Study-10/15 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 1: "Absolutely." (+1)</li>
        </ol>
        <p>Hangout Ueno</p>
        <ol>
            <li>Choice 2: "Glad you're enjoying this." (+2)</li>
            <li>Receive Nude Statue</li>
        </ol>
        <p>Hangout Meiji-Shrine</p>
        <ol>
            <li>Choice 3: "Boatloads of money." (+2)</li>
            <li>Receive Hamaya</li>
        </ol>
        <p>Hangout Ikebukuro</p>
        <ol>
            <li>Choice 2: "I'm glad you're better now." (+2)</li>
            <li>Receive Star Stickers</li>
        </ol>
    </details>

    <details id="hierophant">
        <summary>
            <h4>Hierophant</h4>
        </summary>
        <h4 id="availability-5">Availability</h4>
        <ul>
            <li>Confidant: Sojiro Sakura</li>
            <li>Location: Leblanc</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Monday, Tuesday, and Thursday</li>
            <li>Rank 10 NG+ Gift Carryovers: Coffee Mastery, Curry Mastery</li>
        </ul>
        <h4 id="abilities-5">Abilities</h4>
        <p>Learn to create SP recovery items.</p>
        <ol>
            <li>-</li>
            <li>Coffee Basics: Brew coffee that recovers 30 SP for 1 ally.</li>
            <li>-</li>
            <li>Leblanc Curry: Cook curry that recovers 20 SP for all allies.</li>
            <li>-</li>
            <li>Coffee Mastery: Brew coffee that recovers 100 SP for 1 ally.</li>
            <li>-</li>
            <li>-</li>
            <li>Curry Tips: Cook curry that recovers 50 SP for all allies.</li>
            <li>Curry Mastery: Cook curry that recovers 100 SP for all allies.</li>
        </ol>
        <h4 id="progression-5">Progression</h4>
        <p>Rank 1</p>
        <p>Rank 2 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 1: "Making coffee." (+1)</li>
            <li>Choice 2: "That guy seemed suspicious." (+1)</li>
            <li>Choice 1: "I want the ladies to love me." (+1)</li>
            <li>(Phone) Choice 1: "Got it." (+1)</li>
        </ol>
        <p><strong>Rank 3 requires brewing coffee once.</strong></p>
        <p>Rank 3</p>
        <ol>
            <li>Choice 1: "Medium-fine." (+1)</li>
            <li>Choice 2: "Is it trouble?" (+1)</li>
            <li>(Phone) Choice 3: "Thank you in advance." (+1)</li>
        </ol>
        <p><strong>Rank 4 requires a large amount of confidant points.</strong></p>
        <p>Rank 4 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 1: "Tell me more." (+2)</li>
            <li>Choice 2: "Call Sojiro's phone." (+2)</li>
            <li>(Phone) Choice 1: "Understood." (+1)</li>
        </ol>
        <p><strong>Rank 5 locked until 8/22.</strong></p>
        <p>Rank 5 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 3: "I think I'm addicted!" (+2)</li>
            <li>Choice 2: "She wasn't normal, huh?" (+2)</li>
            <li>Choice 1: "It really paid off in the end." (+1)</li>
            <li>(Phone) Choice 2: "She needs a balanced diet." (+1)</li>
        </ol>
        <p>Rank 6 <strong>(Kindness +5)</strong></p>
        <ol>
            <li>Choice 3: "To each his own." (+1)</li>
            <li>Choice 3: "Shut your mouth." (+2)</li>
            <li>Choice 1: "Saving Futaba was no mistake." (+1)</li>
            <li>(Phone) Choice 3: "If I can help somehow…" (+1)</li>
        </ol>
        <p><strong>Rank 7 requires Kindness Lv. 5 (Angelic).</strong></p>
        <p>Rank 7 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 1: "You might be right." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 3: "Feel like a real dad now?" (+1)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 2: "Something with curry." (+2)</li>
            <li>Choice 2: "I was just protecting Futaba." (+1)</li>
        </ol>
        <p><strong>Rank 8.1 consists of completing "The Money-grubbing Uncle". Speak to Futaba outside Leblanc to
                initiate
                the
                solo request.</strong></p>
        <p>Rank 8.1</p>
        <p>Rank 9</p>
        <ol>
            <li>Choice 1: "It's great." (+2)</li>
            <li>Choice 2: "You have a great daughter." (+3)</li>
            <li>(Phone) Choice 2: "Futaba did great." (+1)</li>
        </ol>
        <p>Rank 10</p>
    </details>

    <details id="lovers">
        <summary>
            <h4>Lovers</h4>
        </summary>
        <h4 id="availability-6">Availability</h4>
        <ul>
            <li>Confidant: Ann Takamaki</li>
            <li>Location: Varies<ul>
                    <li>Schooldays: 2D classroom</li>
                    <li>Holidays: Shibuya underground mall</li>
                </ul>
            </li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Tuesday, Wednesday, Friday, Sunday</li>
            <li>Rank 10 NG+ Gift Carryovers: Enchantment, Crocodile Tears</li>
        </ul>
        <h4 id="abilities-6">Abilities</h4>
        <p>Enhances negotiation techniques.</p>
        <ol>
            <li>-</li>
            <li>Girl Talk: Chance to retry enemy negotiation after failure with a female Shadow.</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Sexy Technique <strong>(Royal)</strong>: Chance to cancel enemy attack.</li>
            <li>Crocodile Tears: Chance to lessen enemy demands during negotiation.</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>-</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-6">Progression</h4>
        <p><strong>Rank 1 automatically starts on 4/15.</strong></p>
        <p>Rank 1</p>
        <p><strong>Rank 2 requires Kindness Lv. 2 (Considerate).</strong></p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 2: "She's so strong." (+3)</li>
            <li>Choice 2: "You might be right." (+2)</li>
            <li>Choice 2: "I couldn't just ignore you." (+2)</li>
            <li>Choice 2: "Let's find it together." (+3)</li>
            <li>(Phone) Choice 2: "Leave it to me." (+1)</li>
        </ol>
        <p>Rank 3 (Unlocks Inokashira) (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "Can we stop yet?" (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "Has that happened to you?" (+2)</li>
            <li>Choice 2: "That freedom sounds nice." (+1)</li>
            <li>(Phone) Choice 1: "Could be." (+1)</li>
        </ol>
        <p>Rank 4 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "I know what you mean." (+2)</li>
            <li>Choice 2: "That's hilarious." (+3)</li>
            <li>Choice 1: "Tell me." (+3)</li>
            <li>Choice 1: "Good idea." (+2)</li>
            <li>Choice 3: "Good luck with that." (+3)</li>
            <li>(Phone) Choice 1: "I train everyday." (+1)</li>
        </ol>
        <p>Rank 5 (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "Give it up." (+1)</li>
            <li>Choice 2: "She's amazing, huh…" (+1)</li>
            <li>Choice 1: "It had grace." (+1)</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>Choice 1: "It seems that way." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "Show her your own strength." (+3)</li>
            <li>(Phone) Choice 2: "I'll cheer you on." (+1)</li>
        </ol>
        <p>Rank 7 (Unlocks Asakusa and Oshiage) (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "She admires you." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "Go get 'em, tiger." (+1)</li>
            <li>(Phone) Choice 1: "You got this." (+1)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 2: "You have some real guts." (+2)</li>
            <li>Choice 1: "There's no doubt in my mind." (+3)</li>
            <li>-</li>
            <li>Choice 2: "I'm sure she already knows." (+3)</li>
            <li>(Phone) Choice 3: "You can ask her yourself." (+1)</li>
        </ol>
        <p>Rank 9 (Friendship) (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "I believe in you, Ann." (+3)</li>
            <li>Choice 2: "You have the others." (+0)</li>
        </ol>
        <p>Rank 9 (Romance) (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "I believe in you, Ann." (+3)</li>
            <li>Choice 1: "You have me." (+0)</li>
            <li>-</li>
            <li>(Phone) Choice 2: "I'm yours forever." (+2)</li>
        </ol>
        <p>Rank 10 (Unlocks Odaiba) (Cannot be raining)</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-3">Other Events</h4>
        <p>Hangout Study-5/9 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 1: "I think so." (+1)</li>
        </ol>
        <p>Hangout Study-7/11 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 1: "Let's work together." (+1)</li>
        </ol>
        <p>Hangout Movies (7/17 only) <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 2: "Understandable." (+2)</li>
        </ol>
        <p>Hangout Meiji-Shrine (8/6 only, Pyramid Palace cleared, Lovers romance or Death romance or both below Rank 8)
        </p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "As expected of a doctor." (+2) (Death +2)</li>
        </ol>
        <p>Hangout Inokashira</p>
        <ol>
            <li>Choice 3: "Let's just enjoy the air." (+3)</li>
        </ol>
        <p>Hangout Shibuya</p>
        <ol>
            <li>Choice 1: "Sounds like a good plan." (+3)</li>
            <li>Receive Choco Fountain</li>
        </ol>
        <p>Hangout Harajuku</p>
        <ol>
            <li>Choice 1: "Yeah." (+3)</li>
            <li>Receive Idol Poster</li>
        </ol>
    </details>

    <details id="chariot">
        <summary>
            <h4>Chariot</h4>
        </summary>
        <h4 id="availability-7">Availability</h4>
        <ul>
            <li>Confidant: Ryuji Sakamoto</li>
            <li>Location: Varies<ul>
                    <li>Schooldays: Outside the 2D classroom</li>
                    <li>Holidays: Shibuya arcade</li>
                </ul>
            </li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Tuesday, Wednesday, Friday, Saturday</li>
            <li>Rank 10 NG+ Gift Carryovers: Stealth Dash, Insta-kill</li>
        </ul>
        <h4 id="abilities-7">Abilities</h4>
        <p>Enhances dash techniques.</p>
        <ol>
            <li>-</li>
            <li>Punk Talk: Chance to retry enemy negotiation after failure with an upbeat Shadow.</li>
            <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
            <li>Stealth Dash <strong>(Royal)</strong>: Harder for enemies to notice Joker when dashing.</li>
            <li>-</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Insta-kill <strong>(Royal)</strong>: Instantly win any ambush against a green enemy (10 levels or
                lower).
                Gains
                all EXP, money, items, and a persona as if that battle was won normally. Can trigger Jose effects and
                Fusion
                alerts.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-7">Progression</h4>
        <p><strong>Rank 1 automatically starts on 4/12.</strong></p>
        <p>Rank 1</p>
        <p>Rank 2 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "I'm counting on you." (+3)</li>
            <li>-</li>
            <li>Choice 1: "Do you go want to go back?" (+1)</li>
            <li>(Phone) Choice 3: "It's never too late, man." (+1)</li>
        </ol>
        <p>Rank 3 (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "Let's not fight." (+1)</li>
            <li>Choice 1: "Calm down, Ryuji." (+2)</li>
            <li>(Phone) Choice 1: "I can't exactly blame you." (+1)</li>
        </ol>
        <p>Rank 4 (Unlocks Ogikubo)</p>
        <ol>
            <li>Choice 2: "Are you worried about him?" (+1)</li>
            <li>Choice 1: "But you're doing great." (+3)</li>
        </ol>
        <p><strong>Rank 5 locked until 5/6.</strong></p>
        <p>Rank 5 (Unlocks Shibuya Gym)</p>
        <ol>
            <li>Choice 2: "Protein powder?" (+2)</li>
            <li>Choice 1: "You seem conflicted." (+1)</li>
            <li>Choice 2: "So he's an asshole?" (+2)</li>
            <li>(Phone) Choice 1: "Don't worry. I gotcha." (+1)</li>
        </ol>
        <p>Rank 6 (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "We can train at my place." (+2)</li>
            <li>Choice 1: "You guys should trust Nakaoka." (+3)</li>
            <li>Choice 1: "Absolutely." (+3)</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 3: "So he should've punched back?" (+1)</li>
        </ol>
        <p><strong>Rank 7 moved to Wednesday and Friday nights (Royal).</strong></p>
        <p>Rank 7 (Unlocks Tsukishima)</p>
        <ol>
            <li>Choice 2: "Let's talk to Takeishi." (+2)</li>
            <li>Choice 1: "I think it's cool, Ryuji." (+3)</li>
            <li>(Phone) Choice 1: "Never know until you try." (+1)</li>
        </ol>
        <p>Rank 8 (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "Things turned out for the best." (+3)</li>
            <li>Choice 1: "All I did was watch." (+2)</li>
            <li>Choice 2: "You weren't cool though." (+2)</li>
            <li>(Phone) Choice 2: "So, case closed?" (+1)</li>
        </ol>
        <p>Rank 9</p>
        <ol>
            <li>Choice 1: "Are you satisfied now?" (+2)</li>
            <li>Choice 3: "Don't do it." (+2)</li>
            <li>Choice 2: "I never realized that." (+2)</li>
            <li>Choice 1: "I agree." (+1)</li>
            <li>(Phone) Choice 1: "Congratulations." (+1)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-4">Other Events</h4>
        <p>Hangout Study-5/10 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 1: "Try starting over." (+1)</li>
        </ol>
        <p>Hangout Harajuku (5/29 only)</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "Kinda want to try it." (+3) (Lovers +3)</li>
        </ol>
        <p>Hangout Movies (5/29 only) <strong>(Kindness +5)</strong></p>
        <ol>
            <li>Choice 1: "They do." (+2)</li>
        </ol>
        <p>Hangout Ichigaya (7/3 only)</p>
        <ol>
            <li>Choice 1: "This is shady." (+3)</li>
            <li>-</li>
            <li>Choice 2: "She's the true master fisher." (+3) (Temperance +3)</li>
        </ol>
        <p>Hangout Study-7/12 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 2: "I'll manage." (+1)</li>
        </ol>
        <p>Hangout Leblanc-7/28 <strong>(Guts +5)</strong></p>
        <ol>
            <li>Choice 2: "Definitely the rival." (+3)</li>
        </ol>
        <p>Hangout Leblanc-8/3 <strong>(Charm +5)</strong></p>
        <ol>
            <li>Choice 1: "Soccer." (+2)</li>
        </ol>
        <p>Hangout Leblanc-8/13 <strong>(Guts +5)</strong></p>
        <ol>
            <li>Win or lose (+2)</li>
        </ol>
        <p>Hangout Study-10/16 <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 2: "Doing okay?" (+1)</li>
        </ol>
        <p>Hangout Ogikubo</p>
        <ol>
            <li>Choice 1: "I'm in love." (+3)</li>
            <li>Receive Ramen Bowl</li>
        </ol>
        <p>Hangout Nakano</p>
        <ol>
            <li>Choice 2: "Let's go to the game center." (+2)</li>
            <li>Choice 1: "Let's check it out." (+3)</li>
            <li>-</li>
            <li>Receive Featherman Dolls</li>
        </ol>
    </details>

    <details id="justice">
        <summary>
            <h4>Justice</h4>
        </summary>
        <h4 id="availability-8">Availability</h4>
        <ul>
            <li>Confidant: Goro Akechi</li>
            <li>Location: Outside darts bar in Kichijoji</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Wednesday and Saturday</li>
            <li>Rank 8 Deadline: 11/20</li>
            <li>Rank 10 NG+ Gift Carryovers: None</li>
        </ul>
        <h4 id="abilities-8">Abilities</h4>
        <p>Can reveal unknown enemy weaknesses. Learns Follow Up and Smooth Talk (God-type Shadow) when joining party.
        </p>
        <ol>
            <li>-</li>
            <li>Sleuthing Instinct <strong>(Royal)</strong>: Chance to reveal 1 elemental resistance for an enemy when
                starting
                battle.</li>
            <li>-</li>
            <li>Sleuthing Mastery <strong>(Royal)</strong>: Chance to reveal all elemental resistances for an enemy when
                starting battle.</li>
            <li>-</li>
            <li>-</li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>-</li>
            <li>-</li>
            <li>Multiple Unlocks<ol>
                    <li>Endure: Chance to survive fatal attack with 1 HP.</li>
                    <li>Protect: Chance to shield Joker from fatal attack.</li>
                </ol>
            </li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-8">Progression</h4>
        <p><strong>Rank 1 automatically starts on 6/10.</strong></p>
        <p>Rank 1</p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 1: "You always seem so busy." (+1)</li>
            <li>-</li>
            <li>Choice 1: "Shoot very carefully." (+1)</li>
            <li>-</li>
            <li>Choice 3: "I see a lot of things." (+2)</li>
            <li>(Phone) Choice 3: "As rivals?" (+1)</li>
        </ol>
        <p><strong>Rank 3 requires Charm Lv. 3 (Suave) and Knowledge Lv. 3 (Scholarly).</strong></p>
        <p>Rank 3</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "Should've figured." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 2: "Wasn't it fun?" (+1)</li>
        </ol>
        <p>Rank 4 (Unlocks Jazz Club)</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "Now this is my kind of club." (+2)</li>
            <li>Choice 1: "Any recommendations?" (+2)</li>
            <li>Choice 1: "It's a great place." (+1)</li>
            <li>-</li>
            <li>Choice 2: "I can use a microwave." (+3)</li>
            <li>(Phone) Choice 2: "I kinda get it." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "Are you used to gunplay?" (+1)</li>
            <li>Choice 1: "You wanted to be a hero?" (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "You did fine." (+1)</li>
        </ol>
        <p><strong>Rank 6 locked until 9/3. Moved to Leblanc at night.</strong></p>
        <p>Rank 6</p>
        <ol>
            <li>Choice 3: "A while, huh?" (+2)</li>
            <li>Choice 2: "…You've been through a lot." (+1)</li>
            <li>Choice 1: "This is nothing." (+2)</li>
            <li>Choice 1: "Same." (+2)</li>
            <li>Choice 2: "Because we're similar." (+1)</li>
            <li>Choice 1: "I think you're right." (+2)</li>
            <li>(Phone) Choice 3: "My bad, I guess." (+1)</li>
        </ol>
        <p><strong>Rank 7 locked until 11/2. Requires Knowledge Lv. 4 (Encyclopedic).</strong></p>
        <p>Rank 7</p>
        <ol>
            <li>Choice 2: "That's why it's so fun." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "I couldn't let myself lose." (+2)</li>
            <li>-</li>
            <li>Choice 1: <strong>"I'll think about it."</strong> (+0)</li>
            <li>(Phone) Choice 3: "We're rivals, aren't we?" (+1)</li>
        </ol>
        <p><strong>Rank 8 requires defeating Akechi in a solo fight event.</strong></p>
        <p>Rank 8</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "I definitely wouldn't lose." (+2)</li>
            <li>Choice 2: "Really hate losing, don't you?" (+2)</li>
            <li>Choice 1: <strong>"I accept."</strong> (+0)</li>
        </ol>
        <p><strong>Ranks 9 and 10 automatically triggered during Cruiser Palace if Rank 8 completed.</strong></p>
        <p>Rank 9</p>
        <p>Rank 10</p>
        <p><strong>The night after Rank 10 choose "I want to keep our promise."</strong></p>
        <p><strong>Rank 11 automatically triggered on 2/2 if Rank 10 completed and promise kept.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-5">Other Events</h4>
        <p>Hangout Shinagawa (7/29 only)</p>
        <ol>
            <li>Choice 1: "It's a nice place." (+2)</li>
            <li>-</li>
            <li>Choice 1: "If you like." (Devil +2)</li>
            <li>Choice 2: "It's nothing bad." (+1)</li>
        </ol>
    </details>

    <details id="hermit">
        <summary><h4>Hermit</h4></summary>
        <h3 id="availability-9">Availability</h3>
        <ul>
            <li>Confidant: Futaba Sakura</li>
            <li>Location: Outside of Leblanc</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Wednesday, Thursday, Saturday, and Sunday, Cannot be raining</li>
            <li>Rank 10 NG+ Gift Carryovers: Mementos Search, Treasure Reboot</li>
        </ul>
        <h4 id="abilities-9">Abilities</h4>
        <p>Learns additional navigation and support skills.</p>
        <ol>
            <li>Moral Support: Chance to cast random -kaja effect or heal on entire party.</li>
            <li>Mementos Scan: Chance to fully map newly entered floor in Mementos.</li>
            <li>-</li>
            <li>Position Hack: Chance to trigger Hold Up when starting battle.</li>
            <li>-</li>
            <li>Active Support: Adds Charge and SP recovery effects to Moral Support pool.</li>
            <li>Treasure Reboot: Chance to replenish all palace search objects after battle.</li>
            <li>-</li>
            <li>Emergency Shift: Chance to swap in backup party when 2 or more members are KO'd.</li>
            <li>Multiple Unlocks<ol>
                    <li>Final Guard: Chance to nullify fatal attack for entire party.</li>
                    <li>Second Awakening: Upgrades persona.</li>
                </ol>
            </li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-9">Progression</h4>
        <p><strong>Rank 1 automatically starts on 8/31.</strong></p>
        <p>Rank 1</p>
        <p><strong>Rank 2 requires Kindness Lv. 4 (Selfless).</strong></p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 2: "That's a great idea." (+1)</li>
            <li>Choice 1: "If we work together." (+2)</li>
            <li>Choice 1: "Sounds good to me." (+0)</li>
            <li>(Phone) Choice 1: "I bet it will." (+1)</li>
        </ol>
        <p>Rank 3</p>
        <ol>
            <li>Choice 3: "I was about to come find you." (+2)</li>
            <li>Choice 1: "Good to see you again." (+3)</li>
            <li>(Phone) Choice 3: "We'll both do our best." (+1)</li>
        </ol>
        <p>Rank 4</p>
        <ol>
            <li>Choice 2: "Let's do this together." (+3)</li>
            <li>-</li>
            <li>Choice 3: "I think it's cute." (+2)</li>
            <li>(Phone) Choice 3: "I'll help you anytime." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "I think you're right." (+2)</li>
            <li>Choice 3: "He's the protagonist." (+2)</li>
            <li>(Phone) Choice 1: "You did great." (+1)</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>Choice 2: "That must have been a shock." (+2)</li>
            <li>Choice 1: "You didn't know any better." (+1)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Are you running away again?" (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>Choice 2: "We have to put a stop to this." (+1)</li>
            <li>Choice 1: "I'll do it, for you." (+3)</li>
        </ol>
        <p><strong>Rank 8 requires completing "Daughter's Just a Meal Ticket".</strong></p>
        <p>Rank 8</p>
        <ol>
            <li>Choice 1: "That's incredible." (+3)</li>
            <li>Choice 1: "You worked really hard too." (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 3: "Want more pats?" (+1)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>Choice 1: "You've really matured." (+2)</li>
            <li>Choice 2: "Are you okay, Futaba?" (+2)</li>
            <li>Choice 2: "No way." (+1)</li>
            <li>Choice 1: "Because we're teammates." (+0)</li>
            <li>(Phone) Choice 3: "A key item." (+1)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>Choice 1: "You've really matured." (+2)</li>
            <li>Choice 2: "Are you okay, Futaba?" (+2)</li>
            <li>Choice 2: "No way." (+1)</li>
            <li>Choice 2: "Because I love you." (+0)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 3: "Do I really have to say it?" (+1)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 unlocked on 1/13.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-6">Other Events</h4>
        <p>Hangout Leblanc-9/25 <strong>(Guts +5)</strong></p>
        <ol>
            <li>Win or lose (+2)</li>
        </ol>
        <p>Hangout Movies (10/2 only) <strong>(Knowledge +5)</strong></p>
        <ol>
            <li>Choice 2: "I think so…" (+3)</li>
        </ol>
        <p>Hangout Nakano (10/9 only)</p>
        <ol>
            <li>Choice 3: "Work a part time job?" (+3)</li>
            <li>-</li>
            <li>Choice 2: "Basically my sister." (Hanged +1)</li>
            <li>Choice 1: "He's my boss." (Hanged +2)</li>
            <li>-</li>
        </ol>
        <p>Hangout Leblanc-10/10 <strong>(Proficiency +5)</strong></p>
        <ol>
            <li>Choice 1: "Of course." (+3) </li>
        </ol>
        <p>Hangout Akihabara</p>
        <ol>
            <li>Choice 3: "You feel betrayed…" (+3)</li>
            <li>Receive Hero Figurine</li>
        </ol>
        <p>Hangout Asakusa</p>
        <ol>
            <li>Choice 3: "Hey look, a ninja." (+3)</li>
            <li>Receive I &lt;3 Tokyo Shirt</li>
        </ol>
    </details>

    <details id="fortune">
        <summary>
            <h4>Fortune</h4>
        </summary>
        <h4 id="availability-10">Availability</h4>
        <ul>
            <li>Confidant: Chihaya Mifune</li>
            <li>Location: Shinjuku fortune telling booth</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Tuesday, Thursday, and Saturday, Cannot be raining or cold</li>
            <li>Rank 10 NG+ Gift Carryovers: Money Reading, Affinity Reading, Special Fate Reading, True Affinity
                Reading
            </li>
        </ul>
        <h4 id="abilities-10">Abilities</h4>
        <p>Each type of reading can only be done once per day and last the entire day.</p>
        <ol>
            <li>Luck Reading: Increase growth of selected social stat by 50%.</li>
            <li>-</li>
            <li>Money Reading: Double money earned from battle when ending with an All-out Attack.</li>
            <li>-</li>
            <li>Affinity Reading <strong>(Royal)</strong>: Gain point +1 to selected confidant.</li>
            <li>-</li>
            <li>Special Fate Reading: See all future abilities of selected confidant.</li>
            <li>Celestial Reading <strong>(Royal)</strong>: Velvet Room starts with Fusion Alert, raises chances of
                alert
                triggering.</li>
            <li>-</li>
            <li>Special Bond Reading <strong>(Royal)</strong>: Highlights the highest point responses during confidant
                events.
            </li>
        </ol>
        <h4 id="progression-10">Progression</h4>
        <p>Rank 0.1</p>
        <p><strong>Rank 0.2 requires Y100,000.</strong></p>
        <p>Rank 0.2</p>
        <p>Rank 0.3</p>
        <p><strong>Rank 1 requires completing "Ending the Boyfriend's Abuse".</strong></p>
        <p>Rank 1</p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 3: "Encourage her." (+0)</li>
            <li>Choice 2: "Overturn your fate!" (+0)</li>
            <li>Choice 2: "Open your mind to change." (+1)</li>
            <li>(Phone) Choice 1: "Of course I am." (+1)</li>
        </ol>
        <p>Rank 3</p>
        <ol>
            <li>Choice 2: "Follow his heart." (+0)</li>
            <li>Choice 1: "Thieves may steal her away." (+0)</li>
            <li>-</li>
        </ol>
        <p>Rank 4</p>
        <ol>
            <li>-</li>
            <li>Choice 3: "Trust in yourself." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 2: "I didn't do much." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 1: "You're such a hard worker." (+2)</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: <strong>"You're just Chihaya to me."</strong> (+3)</li>
            <li>(Phone) Choice 2: "Be honest with yourself." (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>Choice 3: "I don't think so." (+3)</li>
            <li>(Phone) Choice 1: "Are you gonna be okay?" (+1)</li>
        </ol>
        <p>Rank 7.1</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 8 requires completing "Debunking the Psychic!".</strong></p>
        <p>Rank 8</p>
        <ol>
            <li>Choice 2: "I know." (+2)</li>
            <li>Choice 3: "It's because you're strong." (+3)</li>
            <li>Choice 2: <strong>"Hell yeah I am."</strong> (+3)</li>
            <li>(Phone) Choice 2: "It was all your own will." (+1)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>-</li>
            <li>Choice 2: "Well, fate can be changed." (+3)</li>
            <li>Choice 1: "I like having my fortune read." (+0)</li>
            <li>(Phone) Choice 1: "I'm planning on it." (+1)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>-</li>
            <li>Choice 2: "Well, fate can be changed." (+3)</li>
            <li>Choice 2: "So I can be with you." (+0)</li>
            <li>(Phone) Choice 1: "I wanted to hear your voice too." (+1)</li>
        </ol>
        <p>Rank 10</p>
        <h4 id="otherevents-7">Other Events</h4>
        <p>Hangout Jinbocho</p>
        <ol>
            <li>Choice 1: "Autobiographies of great people." (+3)</li>
        </ol>
        <p>Hangout Oshiage (Visited Jinbocho)</p>
        <ol>
            <li>Choice 2: "Such a delicious thrill…" (+3)</li>
            <li>Receive Sky Tower Lamp</li>
        </ol>
    </details>

    <details id="strength">
        <summary>
            <h4>Strength</h4>
        </summary>
        <h4 id="availability-11">Availability</h4>
        <ul>
            <li>Confidant: Caroline and Justine</li>
            <li>Location: Velvet Room</li>
            <li>Time of Day: Any</li>
            <li>Day of Week: Any</li>
            <li>Rank 10 NG+ Gift Carryovers: Isolation, Special Measure, Guillotine Booster, Special Treatment</li>
        </ul>
        <h4 id="abilities-11">Abilities</h4>
        <p>Additional fusion benefits.</p>
        <ol>
            <li>Group Guillotine: Allows special fusions involving 3 personas.</li>
            <li>-</li>
            <li>Lockdown: Allows a persona in Lockdown to gain resistance skills.</li>
            <li>-</li>
            <li>Special Treatment: Allows you to pay to fuse personas higher than your current level.</li>
            <li>-</li>
            <li>-</li>
            <li>Guillotine Booster: Allows special fusions involving 4+ personas.</li>
            <li>-</li>
            <li>VIP Treatment <strong>(Royal)</strong>: Gives a discount for Special Measures.</li>
        </ol>
        <h4 id="progression-11">Progression</h4>
        <p>Unlocked starting 5/18. Talk to Justine in the Velvet Room. Progression is tied to fusing personas with the
            requisite
            skill.</p>
        <p>Rank 1: Jack Frost with Mabufu</p>
        <ul>
            <li>Lv. 11 Jack Frost learns Mabufu at Lv. 12</li>
        </ul>
        <p>Rank 2: Ame-no-Uzume with Frei</p>
        <ul>
            <li>Lv. 15 Makami (Frei) x Lv. 3 Mandrake = Lv. 14 Inugami (Frei)</li>
            <li>Lv. 14 Inugami (Frei) x Lv. 9 Angel = Lv. 13 Ame-no-Uzume (Frei)</li>
        </ul>
        <p>Rank 3: Flauros with Tarukaja</p>
        <ul>
            <li>Lv. 9 Berith x Lv. 16 Eligor (Tarukaja) x Lv 17. Orobas = Lv. 19 Flauros (Tarukaja)</li>
        </ul>
        <p>Rank 4: Phoenix with Counter</p>
        <ul>
            <li>Lv. 20 Yaksini (Counter) x Lv. 6 Kelpie = Lv. 21 Phoenix (Counter)</li>
        </ul>
        <p>Rank 5: Setanta with Rakukaja</p>
        <ul>
            <li>Lv. 26 Lamia (Rakukaja) x Lv. 6 Silky = Lv. 25 Setanta (Rakukaja)</li>
        </ul>
        <p>Rank 6: Neko Shogun with Dekaja</p>
        <ul>
            <li>Lv. 17 Orobas (Dekaja) x Lv. 16 High Pixie = Lv. 17 Sudama (Dekaja)</li>
            <li>Lv. 11 Kodama x Lv. 17 Sudama (Dekaja) x Lv. 25 Anzu = Lv. 30 Neko Shogun (Dekaja)</li>
        </ul>
        <p>Rank 7: Lachesis with Tetraja</p>
        <ul>
            <li>Lv. 29 Principality (Tetraja) x Lv 2. Pixie = Lv. 34 Anubis (Tetraja)</li>
            <li>Lv. 34 Anubis (Tetraja) x Lv 27. Tam Lin = Lv. 35 Lachesis (Tetraja)</li>
        </ul>
        <p>Rank 8: Hecatoncheires with Masukunda</p>
        <ul>
            <li>Lv. 36 Thoth (Masukunda) x Lv. 6 Kelpie = Lv. 37 Belphegor (Masukunda)</li>
            <li>Lv. 37 Belphegor (Masukunda) x Lv. 26 Isis = Lv. 42 Hecatoncheires (Masukunda)</li>
        </ul>
        <p>Rank 9: Bugs with Samarecarm</p>
        <ul>
            <li>Lv. 40 Hariti learns Samarecarm at Lv. 41</li>
            <li>Lv. 2 Pixie x Lv. 28 Pisaca x Lv. 41 Hariti (Samarecarm) = Lv. 49 Bugs (Samarecarm)</li>
        </ul>
        <p>Rank 10: Seth with High Counter</p>
        <ul>
            <li>The free DLC persona Kaguya Picaro comes with High Counter</li>
            <li>Lv 25. Kaguya Picaro (High Counter) x Lv. 4 Bicorn = Lv. 26 Isis (High Counter)</li>
            <li>Lv 26. Isis (High Counter) x Lv. 34 Anubis x Lv. 36 Thoth x Lv. 47 Horus = Lv. 51 Seth (High Counter)
            </li>
        </ul>
        <h4 id="othereventsroyal">Other Events (Royal)</h4>
        <p>You can invite the twins outside the Velvet room during evenings. Doing so takes time, but also earns skill
            cards.
            Completing all dates unlocks a special date during third semester.</p>
        <ul>
            <li>Big Bang Burger: Available from 6/6 (Maragi and Mabufu)</li>
            <li>Movie Theater: Available from 6/7, requires watching a movie in Shibuya (Frei and Psi)</li>
            <li>Gym: Available from 6/15 (Apt Pupil and Sharp Student)</li>
            <li>Church: Available from 6/25 (Samarecarm)</li>
            <li>Aquarium: Available from 7/26 (Masukukaja and Masukunda)</li>
            <li>Sky Tree: Available from 7/26 (Tarukaja, Rakukaja, and Sukukaja)</li>
            <li>Beach: Available from, daytime only 9/2-9/29 (Growth 2)</li>
            <li>Maid Cafe: Available from 9/19, requires previously eating at cafe (Tetraja, Dekunda, and Dekaja)</li>
            <li>Destiny Land: Available from 10/1 (Tetrakarn)</li>
            <li>Art Museum: Available from 10/1 to 11/3 (Regenerate 3)</li>
            <li>Leblanc: Available from 11/25 (High Counter)</li>
            <li>Underground Mall: Available from 12/1 to 12/19 (Heat Riser)</li>
            <li>Your Room: Available from 1/13, requires all previous dates completed (Enduring Soul)</li>
        </ul>
    </details>

    <details id="hanged">
        <summary>
            <h4>Hanged</h4>
        </summary>
        <h4 id="availability-12">Availability</h4>
        <ul>
            <li>Confidant: Munehisa Iwai</li>
            <li>Location: Shibuya Airsoft shop</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Weekend and Holiday</li>
            <li>Rank 10 NG+ Gift Carryovers: Camouflage Customization, Expert Customization, Priceless</li>
        </ul>
        <h4 id="abilities-12">Abilities</h4>
        <p>Allows for gun customization.</p>
        <ol>
            <li>Starter Customization: Unlocks standard gun customization.</li>
            <li>-</li>
            <li>Camo Customization <strong>(Royal)</strong>: Can add ailment effects to custom guns.</li>
            <li>-</li>
            <li>Discount: Halves prices for customizations.</li>
            <li>-</li>
            <li>Expert Customization: Can customize high-grade guns.</li>
            <li>-</li>
            <li>-</li>
            <li>On The House <strong>(Royal)</strong>: All customizations are free.</li>
        </ol>
        <h4 id="progression-12">Progression</h4>
        <p><strong>Rank 1 requires Guts Lv. 4 (Dauntless).</strong></p>
        <p>Rank 1</p>
        <p>Rank 2 <strong>(Proficiency +3)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "How's your cold?" (+1)</li>
        </ol>
        <p>Rank 3 <strong>(Proficiency +3)</strong></p>
        <ol>
            <li>-</li>
            <li>Choice 1: "I always knew you were a thug." (+2)</li>
            <li>Choice 3: "We made a deal, didn't we?" (+2)</li>
            <li>-</li>
        </ol>
        <p>Rank 4 <strong>(Proficiency +3)</strong> (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "Where's my reward?" (+2)</li>
            <li>(Phone) Choice 1: "I agree." (+1)</li>
        </ol>
        <p>Rank 5 <strong>(Proficiency +3)</strong></p>
        <ol>
            <li>-</li>
            <li>Choice 2: "You're pathetic." (+2)</li>
            <li>Choice 3: "I'll stick around for the guns." (+2)</li>
            <li>(Phone) Choice 1: "You're right." (+1)</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "Girls." (+2)</li>
            <li>Choice 3: "You should buy us something." (+2)</li>
            <li>(Phone) Choice 1: "He's my age, so it comes easier." (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>Choice 2: "Absolutely." (+2)</li>
            <li>Choice 2: "He's clever." (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Bring it on." (+1)</li>
        </ol>
        <p><strong>Rank 7.1 requires Guts Lv. 5 (Lionhearted).</strong></p>
        <p>Rank 7.1</p>
        <ol>
            <li>Choice 2: "I did it all for Iwai." (+2)</li>
            <li>Choice 1: "I will." (+1)</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 8 requires completing "Shady Deal in the Shadows".</strong></p>
        <p>Rank 8 <strong>(Proficiency +5)</strong></p>
        <ol>
            <li>Choice 2: "I dunno." (+1)</li>
            <li>Choice 2: "I guess I could consider it." (+2)</li>
            <li>(Phone) Choice 1: "Understood." (+1)</li>
        </ol>
        <p>Rank 9 (Unlocks Odaiba) (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "Are you sure he's still alive?" (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "You need to trust your son." (+2)</li>
            <li>Choice 1: "Kaoru is really strong-willed." (+3)</li>
            <li>(Phone) Choice 1: "Like father, like son." (+1)</li>
        </ol>
        <p>Rank 10 <strong>(Proficiency +3)</strong></p>
        <h4 id="otherevents-8">Other Events</h4>
        <p>Hangout Inokashira</p>
        <ol>
            <li>Choice 3: "Planning for a picnic?" (+3)</li>
            <li>Receive Swan Boat</li>
        </ol>
    </details>

    <details id="death">
        <summary><h4>Death</h4></summary>
        <h4 id="availability-13">Availability</h4>
        <ul>
            <li>Confidant: Tae Takemi</li>
            <li>Location: Takemi Clinic in Yogen-Jaya</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Any, but won't appear for next 3 days after rank up</li>
            <li>Rank 10 NG+ Gift Carryovers: Sterilization, Immunization, Resuscitation</li>
        </ul>
        <h4 id="abilities-13">Abilities</h4>
        <p>Extends collection of items sold at clinic.</p>
        <ol>
            <li>Rejuvenation: Adds some healing items.</li>
            <li>-</li>
            <li>Sterilization: Adds more healing items.</li>
            <li>-</li>
            <li>Immunization: Adds more support items and accessories.</li>
            <li>-</li>
            <li>Discount: Halves all prices.</li>
            <li>-</li>
            <li>-</li>
            <li>Resuscitation: Adds more revival items.</li>
        </ol>
        <h4 id="progression-13">Progression</h4>
        <p>Rank 1 <strong>(Guts +2)</strong></p>
        <p><strong>Rank 2 requires Guts Lv. 2 (Bold).</strong></p>
        <p>Rank 2 (Guts +2)</p>
        <ol>
            <li>Choice 1: "I have a bad heart." (+1)</li>
            <li>Choice 1: "I agree." (+1)</li>
            <li>(Phone) Choice 1: "I'm totally fine." (+1)</li>
        </ol>
        <p>Rank 3 <strong>(Guts +2)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "I don't mind." (+1)</li>
            <li>(Phone) Choice 1: "Of course not." (+1)</li>
        </ol>
        <p>Rank 4 <strong>(Guts +2)</strong></p>
        <ol>
            <li>Choice 2: "Dr. Takemi will help." (+1)</li>
            <li>Choice 1: "You seem happy." (+2)</li>
            <li>(Phone) Choice 1: "I'll reflect on my mistakes." (+1)</li>
        </ol>
        <p>Rank 5 <strong>(Guts +2)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "That's good." (+2)</li>
            <li>(Phone) Choice 1: "About Miwa-chan?" (+1)</li>
        </ol>
        <p>Rank 6 <strong>(Guts +2)</strong> (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "It suits you." (+2)</li>
            <li>(Phone) Choice 1: "You can count on me." (+1)</li>
        </ol>
        <p>Rank 7 <strong>(Guts +2)</strong></p>
        <ol>
            <li>Choice 2: "She's a great doctor." (+1)</li>
            <li>-</li>
            <li>Choice 1: "Just rest for today." (+1)</li>
            <li>Choice 3: <strong>"I'm glad you did."</strong> (+1)</li>
        </ol>
        <p><strong>Rank 7.1 requires Charm Lv. 4 (Charismatic).</strong></p>
        <p>Rank 7.1</p>
        <ol>
            <li>-</li>
            <li>Choice 3: <strong>"I'm your ally."</strong> (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 8 requires completing "Bad Medicine".</strong></p>
        <p>Rank 8 <strong>(Guts +2)</strong></p>
        <ol>
            <li>-</li>
            <li>Choice 2: "Let's get to work, doctor." (+3)</li>
            <li>Choice 1: <strong>"It's for Miwa-chan."</strong> (+3)</li>
            <li>(Phone) Choice 1: "I'll be cheering you on." (+1)</li>
        </ol>
        <p>Rank 9 (Friendship) (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "It was rough." (+2)</li>
            <li>-</li>
            <li>Choice 1: "It wanted to see you." (+0)</li>
            <li>Choice 1: "I love you." (+1)</li>
            <li>Choice 2: "That sounds good." (+0)</li>
            <li>(Phone) Choice 3: "I'm glad we saw it through." (+1)</li>
        </ol>
        <p>Rank 9 (Romance) (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "It was rough." (+2)</li>
            <li>-</li>
            <li>Choice 1: "It wanted to see you." (+0)</li>
            <li>Choice 1: "I love you." (+1)</li>
            <li>Choice 1: "It isn't a joke." (+3)</li>
            <li>(Phone) Choice 2: "So did you." (+1)</li>
        </ol>
        <p>Rank 10 (Friendship)</p>
        <p><strong>Rank 10 (Romance) moved to night.</strong></p>
        <p>Rank 10 (Romance)</p>
    </details>

    <details id="temperance">
        <summary>
            <h4>Temperance</h4>
        </summary>
        <h4 id="availability-14">Availability</h4>
        <ul>
            <li>Confidant: Sadayo Kawakami</li>
            <li>Location: Payphone in Leblanc</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Friday and Saturday</li>
            <li>Rank 10 NG+ Gift Carryovers: Special Massage</li>
        </ul>
        <h4 id="abilities-14">Abilities</h4>
        <p>Frees up time in the overworld.</p>
        <ol>
            <li>Slack Off: Can read, craft, or sleep on certain days during Kawakami's class.</li>
            <li>-</li>
            <li>Housekeeping: Can ask Kawakami to make coffee or do laundry for you.</li>
            <li>-</li>
            <li>Free Time: Extends Slack Off effects to other teachers' classes.</li>
            <li>-</li>
            <li>Super Housekeeping: Can ask Kawakami to make curry or craft for you.</li>
            <li>-</li>
            <li>-</li>
            <li>Special Massage: Can ask Kawakami for a massage after infiltrating Metaverses that lets you go out at
                night.
            </li>
        </ol>
        <h4 id="progression-14">Progression</h4>
        <p><strong>Speak to Mishima to initiate Operation Maidwatch after clearing the Museum Palace.</strong></p>
        <p>Rank 0.1</p>
        <ol>
            <li>Choice 3: "You're a genius, Ryuji!" (Chariot +3)</li>
        </ol>
        <p><strong>Speak to Kawakami outside the staff room to receive her number. Rank 1 requires Guts Lv. 3
                (Staunch).</strong></p>
        <p>Rank 1</p>
        <p>Rank 2</p>
        <ol>
            <li>Choice 1: "It does." (+1)</li>
            <li>Choice 2: "Absolutely not!" (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 2: "Uh, what the hell?" (+1)</li>
        </ol>
        <p>Rank 3</p>
        <ol>
            <li>Choice 1: "Yeah, they do." (+1)</li>
            <li>-</li>
            <li>Choice 2: "I'll request you more often." (+3)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Thanks." (+1)</li>
        </ol>
        <p>Rank 4</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "How rude." (+1)</li>
            <li>Choice 3: "You need to love yourself." (+3)</li>
            <li>-</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 1: "It's fun." (+1)</li>
            <li>Choice 1: "How terrible…" (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 3: "You want some?" (+1)</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>Choice 2: "Want to rest a bit?" (+1)</li>
            <li>Choice 1: "Are you all right?" (+3)</li>
            <li>-</li>
            <li>(Phone) Choice 3: "How are you feeling, though?" (+1)</li>
        </ol>
        <p>Rank 7</p>
        <ol>
            <li>Choice 3: "Don't pay them." (+2)</li>
            <li>Choice 3: <strong>"Think this through more."</strong> (+3)</li>
            <li>-</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 3: "Is this really what you want?" (+2)</li>
            <li>Choice 2: "If that's what you decided." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "That's the right choice." (+3)</li>
            <li>Choice 2: "That's reassuring." (+3)</li>
            <li>(Phone) Choice 3: "I'll do anything for you." (+1)</li>
        </ol>
        <p><strong>Rank 8.1 will automatically trigger during the next school day.</strong></p>
        <p>Rank 8.1</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 9 requires completing "A Teacher Maid to Suffer".</strong></p>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>Choice 1: "Nonsense." (+2)</li>
            <li>Choice 1: "What a bummer." (+3)</li>
            <li>Choice 2: "I want to keep seeing you." (+1)</li>
            <li>Choice 2: "Got it ." (+1)</li>
            <li>(Phone) Choice 2: "You can do it." (+1)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>Choice 1: "Nonsense." (+2)</li>
            <li>Choice 1: "What a bummer." (+3)</li>
            <li>Choice 2: "I want to keep seeing you." (+1)</li>
            <li>Choice 2: "I mean what I say." (+0)</li>
            <li>Choice 2: "I'm a man; you're a woman." (+0)</li>
        </ol>
        <p><strong>Rank 9.1 will automatically trigger during the next school day.</strong></p>
        <p>Rank 9.1</p>
        <p>Rank 10</p>
        <h4 id="otherevents-9">Other Events</h4>
        <p>Hangout Odaiba (Rank 10 Romance only)</p>
        <ol>
            <li>-</li>
            <li>Receive Night Pennant</li>
        </ol>
    </details>

    <details id="devil">
        <summary>
            <h4>Devil</h4>
        </summary>
        <h4 id="availability-15">Availability</h4>
        <ul>
            <li>Confidant: Ichiko Ohya</li>
            <li>Location: Bar Crossroads in Shinjuku</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Monday, Tuesday, Thursday, and Friday</li>
            <li>Rank 10 NG+ Gift Carryovers: Shocking Scoop, Outrageous Scoop, Legendary Scoop</li>
        </ul>
        <h4 id="abilities-15">Abilities</h4>
        <p>Manipulates the security level in Metaverse.</p>
        <ol>
            <li>Rumor-filled Scoop <strong>(Royal)</strong>: Lowers security level when discovering new safe room.</li>
            <li>-</li>
            <li>Shocking Scoop <strong>(Royal)</strong>: Reduces security level effect of being discovered and increases
                reduction after successful ambush.</li>
            <li>-</li>
            <li>Unprecedented Scoop <strong>(Royal)</strong>: Lowers starting security level when entering Metaverse.
            </li>
            <li>-</li>
            <li>Outrageous Scoop <strong>(Royal)</strong>: Lowers starting security level even more when entering
                Metaverse.
            </li>
            <li>-</li>
            <li>-</li>
            <li>Legendary Scoop <strong>(Royal)</strong>: Can ambush enemies even during high security levels.</li>
        </ol>
        <h4 id="progression-15">Progression</h4>
        <p>Rank 1 <strong>(Charm +3)</strong></p>
        <p>Rank 2 <strong>(Charm +3)</strong></p>
        <ol>
            <li>Choice 3: "Mishima might…" (+1)</li>
            <li>-</li>
            <li>Choice 2: "It's for the article." (+1)</li>
        </ol>
        <p>Rank 3 <strong>(Charm +3)</strong></p>
        <ol>
            <li>Choice 3: "You shouldn't make assumptions." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "She was falsely accused?" (+1)</li>
        </ol>
        <p>Rank 4 <strong>(Charm +3)</strong> (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "Of course we are." (+1)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Leave it to me." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "That's unforgivable." (+2)</li>
            <li>(Phone) Choice 1: "I don't mind." (+1)</li>
        </ol>
        <p>Rank 6</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "He must not like you." (+1)</li>
            <li>Choice 2: "You should trust in her." (+1)</li>
            <li>Choice 1: "That's the spirit" (+1)</li>
            <li>(Phone) Choice 3: "I'll dig up some more for you." (+1)</li>
        </ol>
        <p>Rank 7 <strong>(Charm +5)</strong></p>
        <ol>
            <li>-</li>
            <li>Choice 2: "Don't let him provoke you." (+3)</li>
            <li>Choice 2: <strong>"You're charming as you are."</strong> (+3)</li>
            <li>(Phone) Choice 1: "That's the spirit." (+1)</li>
        </ol>
        <p>Rank 7.1</p>
        <ol>
            <li>Choice 2: "You seem tired." (+1)</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 8 requires completing "Fighting for Truth of Journalism".</strong></p>
        <p>Rank 8 <strong>(Charm +5)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: <strong>"I'll go with you"</strong> (+2)</li>
            <li>(Phone) Choice 1: "Good luck." (+1)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>-</li>
            <li>Choice 2: "You're not giving up, are you?" (+1)</li>
            <li>Choice 1: <strong>"I can't leave you."</strong> (+2)</li>
            <li>-</li>
            <li>Choice 2: "I didn't take it seriously." (+0)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>-</li>
            <li>Choice 2: "You're not giving up, are you?" (+1)</li>
            <li>Choice 1: <strong>"I can't leave you."</strong> (+2)</li>
            <li>-</li>
            <li>Choice 1: "I took it seriously." (+0)</li>
            <li>Choice 1: "I love you, Ichiko." (+0)</li>
            <li>(Phone) Choice 1: "I wanted to hear your voice." (+1)</li>
        </ol>
        <p>Rank 10 (Cannot be raining)</p>
        <h4 id="otherevents-10">Other Events</h4>
        <p>Hangout Odaiba (Rank 4 to Rank 6)</p>
        <ol>
            <li>Choice 2: "That's right." (+3)</li>
        </ol>
        <p>Hangout Ginza (Rank 8 or higher)</p>
        <ol>
            <li>Choice 1: "Get pumped!" (+3)</li>
            <li>Receive Sushi Mug</li>
        </ol>
    </details>

    <details id="tower">
        <summary>
            <h4>Tower</h4>
        </summary>
        <h4 id="availability-16">Availability</h4>
        <ul>
            <li>Confidant: Shinya Oda</li>
            <li>Location: Akihabara Arcade</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Monday, Tuesday, Thursday, and Saturday</li>
            <li>Rank 10 NG+ Gift Carryovers: Bullet Hail, Warning Shot, Stained Coating, Cheap Shot, Electric Slug, Oda
                Special
            </li>
        </ul>
        <h4 id="abilities-16">Abilities</h4>
        <p>Enhances gun weapon attacks.</p>
        <ol>
            <li>Down Shot <strong>(Royal)</strong>: Allows you to down an enemy once per Metaverse visit.</li>
            <li>Bullet Hail: Chance to begin battle by lowering enemy health after successful ambush.</li>
            <li>Warning Shot: Can threaten enemy for easier negotiation when obtaining a persona.</li>
            <li>-</li>
            <li>Laced Bullets <strong>(Royal)</strong>: Raises chances for guns that deal ailments to succeed.</li>
            <li>Cheap Shot <strong>(Royal)</strong>: Allows you to down an enemy 3 times per Metaverse visit.</li>
            <li>-</li>
            <li>Electric Slug: Increases damage dealt by Bullet Hail.</li>
            <li>-</li>
            <li>Oda Special: Allows Joker's gun to pierce all resistances.</li>
        </ol>
        <h4 id="progression-16">Progression</h4>
        <p><strong>Rank 1 requires trying and failing "Winners Don't Use Cheats".</strong></p>
        <p>Rank 1 <strong>(Kindness +5)</strong></p>
        <p>Rank 2 <strong>(Kindness +5)</strong></p>
        <ol>
            <li>Choice 2: "Don't compare me to you." (+2)</li>
            <li>Choice 2: "What a rude employee." (+1)</li>
            <li>Choice 2: "Do you admire them?" (+1)</li>
            <li>Choice 3: "I'll let them know." (+3)</li>
            <li>(Phone) Choice 1: "I'll work hard." (+1)</li>
        </ol>
        <p>Rank 3 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "That's the spirit." (+1)</li>
            <li>(Phone) Choice 1: "Sure." (+1)</li>
        </ol>
        <p>Rank 4 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 3: "Yeah, you tell him!" (+1)</li>
            <li>Choice 2: "Get your revenge." (+1)</li>
        </ol>
        <p>Rank 4.0 <strong>(Kindness +3)</strong> (For Hangout Asakusa)</p>
        <ol>
            <li>Choice 3: "Yeah, you tell him!" (+1)</li>
            <li>Choice 1: "Don't get so worked up." (+0)</li>
        </ol>
        <p>Rank 5 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>Choice 1: "It was pretty weird." (+3)</li>
            <li>Choice 2: "I'm sure you can do it." (+1)</li>
            <li>Choice 2: "You need a new strategy." (+2)</li>
            <li>(Phone) Choice 1: "I'll be cheering you on." (+1)</li>
        </ol>
        <p>Rank 6 <strong>(Kindness +3)</strong></p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "I believe in you." (+2)</li>
            <li>Choice 2: "Not at all." (+2)</li>
            <li>(Phone) Choice 1: "Of course I won't." (+1)</li>
        </ol>
        <p>Rank 6.0 <strong>(Kindness +3)</strong> (For Hangout Maihama)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "I believe in you." (+2)</li>
            <li>Choice 3: "I'm worried about you." (+0)</li>
            <li>(Phone) Choice 2: "That's up to you." (+0)</li>
        </ol>
        <p>Rank 7 (Cannot be raining)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p>Rank 8 <strong>(Kindness +5)</strong> (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "No, she's not." (+1)</li>
            <li>Choice 3: "Believe in them." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Let's save her." (+3)</li>
        </ol>
        <p><strong>Rank 9 requires completing "A Mother's Aggression".</strong></p>
        <p>Rank 9 <strong>(Kindness +5)</strong> (Cannot be raining)</p>
        <ol>
            <li>Choice 1: "I'm glad to hear that." (+2)</li>
            <li>Choice 3: "It means you've matured." (+3)</li>
            <li>Choice 1: "He wants to win at all costs." (+1)</li>
            <li>(Phone) Choice 3: "You did a great job too." (+1)</li>
        </ol>
        <p>Rank 10 <strong>(Kindness +2)</strong></p>
        <h4 id="otherevents-11">Other Events</h4>
        <p>Hangout Asakusa (Rank 4, 5, 6, or 9)</p>
        <ol>
            <li>Choice 1: "Let's walk around and eat." (+3)</li>
        </ol>
        <p>Hangout Maihama (Visited Asakusa, Rank 6 10/10, 10/30, or 11/3, Rank 9 11/3)</p>
        <ol>
            <li>Choice 3: "Coming alone isn't bad." (+3)</li>
            <li>Receive Balloons</li>
        </ol>
    </details>

    <details id="star">
        <summary>
            <h4>Star</h4>
        </summary>
        <h4 id="availability-17">Availability</h4>
        <ul>
            <li>Confidant: Hifumi Togo</li>
            <li>Location: Kanda Church</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Monday, Wednesday, and Saturday</li>
            <li>Rank 10 NG+ Gift Carryovers: Touryou</li>
        </ul>
        <h4 id="abilities-17">Abilities</h4>
        <p>Useful battle tactics.</p>
        <ol>
            <li>Koma Sabaki: Can swap in backup party during Joker's turn.</li>
            <li>-</li>
            <li>Uchikomi: Allows backup party to follow-ups with Joker.</li>
            <li>-</li>
            <li>Kakoi Kuzushi: Can attempt escape even when surrounded.</li>
            <li>-</li>
            <li>Narikin: Double money earned if battle ends 1 turn after successful ambush.</li>
            <li>-</li>
            <li>Touryou: Can instantly escape battle.</li>
            <li>Togo System: Can swap in backup party during anyone's turn.</li>
        </ol>
        <h4 id="progression-17">Progression</h4>
        <p><strong>Rank 1 requires Charm Lv. 3 (Suave).</strong></p>
        <p>Rank 1 <strong>(Knowledge +2)</strong></p>
        <p>Rank 2 <strong>(Knowledge +2)</strong></p>
        <ol>
            <li>Choice 1: "That's interesting." (+1)</li>
            <li>-</li>
            <li>Choice 3: "But you don't want to, right?" (+1)</li>
        </ol>
        <p>Rank 3 (Knowledge + 1)</p>
        <ol>
            <li>Choice 1: "Describes you perfectly." (+1)</li>
            <li>Choice 2: "Having a difficult time?" (+1)</li>
            <li>(Phone) Choice 1: "Bring it on." (+1)</li>
        </ol>
        <p>Rank 4 (Unlocks Jinbocho) (Cannot be raining)</p>
        <ol>
            <li>Choice 3: "Must've been the katsu curry." (+1)</li>
            <li>Choice 2: "They're cool." (+1)</li>
            <li>(Phone) Choice 1: "I'd love to." (+1)</li>
        </ol>
        <p>Rank 5 <strong>(Knowledge +2)</strong></p>
        <ol>
            <li>Choice 2: "She's scary." (+1)</li>
            <li>Choice 2: "You should stop then." (+1)</li>
            <li>(Phone) Choice 2: "You've got a lot to deal with…" (+1)</li>
        </ol>
        <p>Rank 6 <strong>(Knowledge +2)</strong> (Cannot be raining)</p>
        <ol>
            <li>Choice 2: "Is that frustrating?" (+1)</li>
            <li>Choice 3: "Do what you love." (+1)</li>
            <li>(Phone) Choice 2: "You're imagining things." (+1)</li>
        </ol>
        <p>Rank 7 <strong>(Knowledge +2)</strong></p>
        <ol>
            <li>Choice 3: "It may come down to luck." (+2)</li>
            <li>Choice 2: "I believe in you." (+2)</li>
        </ol>
        <p><strong>Rank 7.1 requires Knowledge Lv. 5 (Erudite).</strong></p>
        <p>Rank 7.1</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "That won't work." (+1)</li>
            <li>-</li>
            <li>-</li>
        </ol>
        <p><strong>Rank 8 requires completing "Upstaging the Stage Mother".</strong></p>
        <p>Rank 8 <strong>(Knowledge +2)</strong></p>
        <ol>
            <li>Choice 3: "I'm glad her heart changed." (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "I support it." (+1)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>Choice 1: "Give it all you got." (+1)</li>
            <li>Choice 3: "A very queenly decision." (+2)</li>
            <li>Choice 1: "I want to become stronger." (+0)</li>
            <li>(Phone) Choice 3: "Let's win the next one." (+1)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>Choice 1: "Give it all you got." (+1)</li>
            <li>Choice 3: "A very queenly decision." (+2)</li>
            <li>Choice 2: "I want to stay by your side." (+0)</li>
            <li>Choice 1: "I want us to date." (+0)</li>
            <li>(Phone) Choice 3: "It was love at first sight." (+1)</li>
        </ol>
        <p>Rank 10</p>
        <h4 id="otherevents-12">Other Events</h4>
        <p>Hangout Akihabara (9/22 only)</p>
        <ol>
            <li>Choice 1: "Let's take things slow." (+2)</li>
            <li>Choice 3: "How about stripping?" (Emperor +3)</li>
            <li>Choice 3: "That's fine." (Emperor +2)</li>
            <li>Choice 3: "I can understand both." (Fortune +2)</li>
        </ol>
        <p>Hangout Inokashira</p>
        <ol>
            <li>Choice 2: "It's a good stimulator, huh?" (+3)</li>
        </ol>
        <p>Hangout Jinbocho (Rank 7 or higher, Must complete Hangout Inokashira)</p>
        <ol>
            <li>Choice 1: "Leave it to me." (+3)</li>
            <li>Receive King Piece</li>
        </ol>
    </details>

    <details id="moon">
        <summary>
            <h4>Moon</h4>
        </summary>
        <h4 id="availability-18">Availability</h4>
        <ul>
            <li>Confidant: Yuuki Mishima</li>
            <li>Location: Varies<ul>
                    <li>Shibuya Central Street</li>
                    <li>Moves to Shinjuku when it opens</li>
                    <li>Moves to Akihabara when it opens</li>
                </ul>
            </li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Any, but won't appear for next 3 days after rank up</li>
            <li>Rank 10 NG+ Gift Carryovers: Phanboy, Salvation Wish</li>
        </ul>
        <h4 id="abilities-18">Abilities</h4>
        <p>Increases experience earned in battle.</p>
        <ol>
            <li>-</li>
            <li>Mishima's Support: Backup party earn some EXP.</li>
            <li>Mishima's Enthusiasm: Increases EXP earned by active party.</li>
            <li>-</li>
            <li>Mishima's Desperation: Increases EXP earned by backup party.</li>
            <li>-</li>
            <li>Phanboy: Greatly increases EXP earned by active party.</li>
            <li>-</li>
            <li>-</li>
            <li>Salvation Wish: Backup party earns same experience as active party.</li>
        </ol>
        <h4 id="progression-18">Progression</h4>
        <p>Progression tied to completing number of requisite requests before progressing with rank up event.</p>
        <ul>
            <li>Rank 1: Auto</li>
            <li>Rank 2: Auto</li>
            <li>Rank 3: 1 request (Cannot be raining)</li>
            <li>Rank 4: 2 requests</li>
            <li>Rank 5: 3 requests</li>
            <li>Rank 6: 4 requests (Cannot be raining)</li>
            <li>Rank 6.1: 5 requests</li>
            <li>Rank 7: 5 requests (Cannot be raining)</li>
            <li>Rank 8: 7 requests (Cannot be raining)</li>
            <li>Rank 9: 8 requests</li>
            <li>Rank 10: 10 requests (Cannot be raining)</li>
        </ul>
        <p>There are 16 total requests that count towards progression.</p>
        <ul>
            <li>5/9: The Bark and Bite of a Bully</li>
            <li>Day after clearing Museum Palace: If Cats Disappeared from the City</li>
            <li>6/5: An Elderly's Meaning of Life</li>
            <li>6/6: Sadism Is Just a Sign of Love</li>
            <li>7/10: The Lovesick Cyberstalking Girl</li>
            <li>Day after clearing Pyrmaid Palace or 8/2: We Aren't Just Your Slaves</li>
            <li>2 days after clearing Pyramid Palace or 8/3: Who's Been Assaulting People?</li>
            <li>3 days after clearing Pyramid Palace or 8/4: Calling for Justice for Cats</li>
            <li>8/29: Who's Muscling in Yongen-Jaya?</li>
            <li>10/14: The Killer Who Cleans Up Trash</li>
            <li>11/25: Swindling Old Folk is Pretty Low</li>
            <li>Day after clearing Cruiser Palace or 12/3: The Head Honcho in Showbiz</li>
            <li>1/14: O My Young Sister, I Cry For You</li>
            <li>Rank 3: One Who Bullies Bullies</li>
            <li>Rank 4: Part-time Job, Full-time Hell</li>
            <li>Rank 8: Man of Many Faces and Debts</li>
        </ul>
        <h4 id="otherevents-13">Other Events</h4>
        <p>Hangout Suidobashi (11/3 only)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: Can he join us? (Tower +2)</li>
        </ol>
    </details>

    <details id="sun">
        <summary>
            <h4>Sun</h4>
        </summary>
        <h4 id="availability-19">Availability</h4>
        <ul>
            <li>Confidant: Toranosuke Yoshida</li>
            <li>Location: In front of Shibuya Station</li>
            <li>Time of Day: Evening</li>
            <li>Day of Week: Varies<ul>
                    <li>Before Rank 1 completed: Any day</li>
                    <li>After Rank 1 completed: Sunday only, Cannot be raining</li>
                </ul>
            </li>
            <li>Rank 10 Deadline: 11/13</li>
            <li>Rank 10 NG+ Gift Carryovers: Diplomacy, Fundraising, Manipulation, Mind Control, Charismatic Speech</li>
        </ul>
        <h4 id="abilities-19">Abilities</h4>
        <p>Affects negotiations during Hold Up.</p>
        <ol>
            <li>-</li>
            <li>Diplomacy: Can ask for additional money or items.</li>
            <li>Fundraising: Can ask for much more money.</li>
            <li>-</li>
            <li>Manipulation: Raises chances of obtaining rare items.</li>
            <li>-</li>
            <li>-</li>
            <li>Mind Control: Can sometimes skip negotiation when asking for persona.</li>
            <li>-</li>
            <li>Charismatic Speech: Can recruit personas higher than you current level.</li>
        </ol>
        <h4 id="progression-19">Progression</h4>
        <p><strong>Rank 0.1 requires 2 shifts at beef bowl job. Afterwards rank will always progress regardless of
                points.</strong></p>
        <ul>
            <li>Rank 0.1</li>
            <li>Rank 1</li>
            <li>Rank 2 <strong>(Charm +3)</strong></li>
            <li>Rank 3</li>
            <li>Rank 4 <strong>(Charm +3)</strong></li>
            <li>Rank 5 <strong>(Charm +3)</strong></li>
            <li>Rank 6</li>
            <li>Rank 7 <strong>(Charm +3)</strong></li>
            <li>Rank 8 <strong>(Charm +5)</strong></li>
            <li>Rank 9</li>
            <li>Rank 10 <strong>(Charm +5)</strong></li>
        </ul>
        <h3 id="judgement">Judgement</h3>
        <h4 id="availability-20">Availability</h4>
        <ul>
            <li>Confidant: Sae Niijima</li>
            <li>Location: None</li>
            <li>Time of Day: None</li>
            <li>Day of Week: None</li>
            <li>Rank 10 NG+ Gift Carryovers: None</li>
        </ul>
        <h4 id="abilities-20">Abilities</h4>
        <p>None. Arcana Burst bonuses do not unlock until Rank 10.</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>True Justice: ???</li>
        </ol>
        <h4 id="progression-20">Progression</h4>
        <p>Tied to game progress.</p>
        <ul>
            <li>Rank 1: 7/9</li>
            <li>Rank 2: 7/24</li>
            <li>Rank 3: 8/22</li>
            <li>Rank 4: 9/13</li>
            <li>Rank 5: 10/12</li>
            <li>Rank 6: 10/28</li>
            <li>Rank 7</li>
            <li>Rank 8</li>
            <li>Rank 9</li>
            <li>Rank 10: 11/20 and Normal End or better.</li>
        </ul>
    </details>

    <details id="faith">
        <summary><h4>Faith</h4></summary>
        <h4 id="availability-21">Availability</h4>
        <ul>
            <li>Confidant: Kasumi Yoshizawa</li>
            <li>Location: Near entrance of Kichijoji</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Irregular<ul>
                    <li>Before 1/13: Tends to appear on Wednesday and Thursday</li>
                    <li>Prioritize meeting whenever she appears</li>
                    <li>After 1/13: Any weekday</li>
                </ul>
            </li>
            <li>Rank 5 Deadline: 12/23</li>
            <li>Rank 10 NG+ Gift Carryovers: None</li>
        </ul>
        <h4 id="abilities-21">Abilities</h4>
        <p>Enhance ambush techniques.</p>
        <ol>
            <li>-</li>
            <li>Tumbling: Chance to dodge enemy when spotted and begin encounter with an ambush instead.</li>
            <li>-</li>
            <li>Chaines Hook: Can use grappling hook to ambush enemy from a distance.</li>
            <li>-</li>
            <li>Multiple Unlocks<ol>
                    <li>Follow Up: Chance to perform follow-up attack if Joker does not down enemy.</li>
                    <li>Fitness Talk: Chance to retry enemy negotiation after failure with any Shadow.</li>
                </ol>
            </li>
            <li>Harisen Recovery: Chance to cure ailments for a party member.</li>
            <li>Endure: Chance to survive fatal attack with 1 HP.</li>
            <li>Protect: Chance to shield Joker from fatal attack.</li>
            <li>Second Awakening: Upgrades persona.</li>
            <li>Third Awakening: Upgrades persona.</li>
        </ol>
        <h4 id="progression-21">Progression</h4>
        <p><strong>Rank 1 automatically starts on 5/30.</strong></p>
        <p>Rank 1</p>
        <p>Rank 2 (HP +5)</p>
        <ol>
            <li>Choice 1: "We're just getting started." (+1)</li>
            <li>Choice 1: "Next time, then." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Impressive." (+1)</li>
        </ol>
        <p>Rank 3 (HP +5)</p>
        <ol>
            <li>Choice 1: "Making bento?" (+2)</li>
            <li>Choice 2: "It looks delicious." (+1)</li>
            <li>Choice 1: "Is that all for you?" (+2)</li>
            <li>Choice 2: "It's definitely unique." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "You could try again sometime?" (+3)</li>
            <li>-</li>
        </ol>
        <p>Rank 4 (HP +5)</p>
        <ol>
            <li>Choice 2: "You're looking to buy?" (+1)</li>
            <li>Choice 1: "A pretty modern look." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Of course." (+1)</li>
            <li>-</li>
            <li>Choice 1: "Good choice." (+1)</li>
            <li>-</li>
            <li>Choice 1: "Everyone deals with that." (+1)</li>
            <li>Choice 2: "We'll work at it together." (+1)</li>
            <li>(Phone) Choice 1: "I'm glad to hear that." (+1)</li>
        </ol>
        <p>Rank 5</p>
        <ol>
            <li>Choice 1: "It's a surprise, yeah." (+1)</li>
            <li>-</li>
            <li>Choice 2: "Go ahead. I'll watch." (+3)</li>
            <li>-</li>
            <li>Choice 2: "I saw!" (+3)</li>
            <li>Choice 1: "That's important." (+3)</li>
            <li>-</li>
            <li>(Phone) Choice 3: "Gymnastics." (+3)</li>
        </ol>
        <p><strong>Deadline for Rank 5 is 12/23. Rank 6 unlocked on 1/13.</strong></p>
        <p>Rank 6 (HP +5)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 2: "You have to face it." (+2)</li>
        </ol>
        <p>Rank 7 (HP +5)</p>
        <ol>
            <li>-</li>
            <li>-</li>
            <li>Choice 1: "You okay?" (+2)</li>
            <li>Choice 1: "That isn't true." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Of course." (+3)</li>
            <li>(Phone) Choice 3: "I love a good challenge." (+2)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 1: "Walk up to Sumire." (+3)</li>
            <li>-</li>
            <li>Choice 2: "I'm here for you." (+2)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 3: "I'm in love." (+3)</li>
            <li>-</li>
            <li>-</li>
            <li>Choice 2: "Sounds like progress." (+2)</li>
            <li>(Phone) Choice 3: "Online." (+2)</li>
        </ol>
        <p>Rank 9 (Friendship)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "It's no problem." (+2)</li>
            <li>Choice 1: "Definitely." (+2)</li>
            <li>Choice 1: "Of course I do." (+2)</li>
            <li>Choice 3: "This is a new beginning." (+2)</li>
            <li>Choice 3: "Go ahead." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Let's stay friends." (+0)</li>
            <li>Choice 3: "You can always rely on me." (+2)</li>
            <li>(Phone) Choice 1: "I'm glad to hear that." (+2)</li>
        </ol>
        <p>Rank 9 (Romance)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "It's no problem." (+2)</li>
            <li>Choice 1: "Definitely." (+2)</li>
            <li>Choice 1: "Of course I do." (+2)</li>
            <li>Choice 3: "This is a new beginning." (+2)</li>
            <li>Choice 3: "Go ahead." (+2)</li>
            <li>-</li>
            <li>Choice 2: "I love you too." (+0)</li>
            <li>Choice 1: "Calm down." (+2)</li>
            <li>Choice 3: "You're so cute." (+3)</li>
            <li>(Phone) Choice 1: "Get used to it." (+2)</li>
        </ol>
        <p>Rank 10</p>
        <p><strong>Rank 11 locked until 2/2.</strong></p>
        <p>Rank 11</p>
        <h4 id="otherevents-14">Other Events</h4>
        <p>Hangout Shinagawa (Only before 12/22)</p>
        <ol>
            <li>Choice 1: "Yeah." (+3)</li>
            <li>Choice 3: "Let's see both." (+3)</li>
            <li>Receive Sea Slug Doll</li>
        </ol>
    </details>

    <details id="councillor">
        <summary>
            <h4>Councillor</h4>
        </summary>
        <h4 id="availability-22">Availability</h4>
        <ul>
            <li>Confidant: Takuto Maruki</li>
            <li>Location: First floor of Shujin practice building</li>
            <li>Time of Day: Daytime</li>
            <li>Day of Week: Monday and Friday during schooldays</li>
            <li>Rank 9 Deadline: 11/18</li>
            <li>Rank 10 NG+ Gift Carryovers: None</li>
        </ul>
        <h4 id="abilities-22">Abilities</h4>
        <p>Chance-based battle benefits for Joker alone.</p>
        <ol>
            <li>-</li>
            <li>Detox X: Chance to immediately recover from ailment.</li>
            <li>Flow: Chance to begin battle with Charge and Concentrate.</li>
            <li>-</li>
            <li>Mindfulness: Chance to recover SP when running low.</li>
            <li>-</li>
            <li>Flow Boost: Increases chance of Joker Zone activating.</li>
            <li>-</li>
            <li>Detox DX: Increases chance of Detox X activating.</li>
            <li>Wakefulness: Increases chance of Mindfulness activating along with more SP recovery.</li>
        </ol>
        <h4 id="progression-22">Progression</h4>
        <p><strong>Ranks 1 and 2 automatically start on 5/13.</strong></p>
        <p>Rank 1</p>
        <p>Rank 2 (SP +5)</p>
        <ol>
            <li>Choice 2: "We made a deal." (+1)</li>
            <li>-</li>
            <li>Choice 1: "But it sounds right." (+2)</li>
            <li>-</li>
            <li>Choice 1: "Well, okay." (+1)</li>
        </ol>
        <p>Rank 3 (SP +5)</p>
        <ol>
            <li>Choice 1: "So they have, huh?" (+1)</li>
            <li>Choice 1: "Of course." (+1)</li>
            <li>-</li>
            <li>Choice 3: "It's a seed for new love." (+1)</li>
            <li>Choice 1: "Did that help?" (+1)</li>
            <li>(Phone) Choice 1: "Good work over there." (+1)</li>
        </ol>
        <p>Rank 4 (SP +5)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "I know, right?" (+2)</li>
            <li>Choice 3: "Is that what you're researching?" (+2)</li>
            <li>-</li>
            <li>Choice 1: "That's a grand plan." (+1)</li>
            <li>Choice 1: "That sounds fun." (+2)</li>
            <li>(Phone) Choice 1: "I feel completely fine." (+1)</li>
        </ol>
        <p>Rank 5 (SP +5)</p>
        <ol>
            <li>Choice 1: "This looks great!" (+2)</li>
            <li>-</li>
            <li>Choice 3: "You know, you're right." (+2)</li>
            <li>Choice 2: "Hey, as long as it tastes good." (+1)</li>
            <li>Choice 2: "I guess so." (+1)</li>
            <li>(Phone) Choice 1: "I really don't mind." (+1)</li>
        </ol>
        <p><strong>Rank 6 locked until 9/20.</strong></p>
        <p>Rank 6</p>
        <ol>
            <li>Choice 2: "Another cup?" (+1)</li>
            <li>Choice 1: "I can do that." (+2)</li>
            <li>-</li>
            <li>Choice 3: "So give up." (+1)</li>
            <li>-</li>
            <li>-</li>
            <li>(Phone) Choice 1: "Calm down." (+1)</li>
        </ol>
        <p>Rank 7 (SP +5)</p>
        <ol>
            <li>Choice 3: "Are you a fan?" (+2)</li>
            <li>Choice 2: "As in, removing them?" (+3)</li>
            <li>Choice 1: "The change of heart?" (+3)</li>
            <li>Choice 3: "It's intriguing." (+3)</li>
        </ol>
        <p>Rank 8</p>
        <ol>
            <li>Choice 2: "What do you mean?" (+2)</li>
            <li>Choice 1: "Ooh, really?" (+2)</li>
            <li>Choice 1: "Thanks for the food!" (+2)</li>
            <li>Choice 3: "We've made a deal." (+2)</li>
            <li>Choice 1: "Congratulations." (+3)</li>
            <li>Choice 1: "I sure do." (+2)</li>
            <li>-</li>
            <li>(Phone) Choice 1: "He's a good friend." (+1)</li>
        </ol>
        <p>Rank 9 (SP +5)</p>
        <ol>
            <li>-</li>
            <li>Choice 1: "Kind of sad…" (+2)</li>
        </ol>
        <p><strong>Rank 10 automatically triggered on 11/18 if Rank 9 completed.</strong></p>
        <p>Rank 10</p>
        </div>
    </details>
</details>
`;

//font source: https://www.reddit.com/r/Persona5/comments/kqickc/persona_5_menu_font_prototype/

//background source: https://steamcommunity.com/sharedfiles/filedetails/?id=2948225096&insideModal=0

//sound source: https://www.sounds-resource.com/playstation_3/persona5/sound/30366/ sound effect 00302_streaming.wav
const selectSoundSrc = 'assets/knifesound.wav';

//icon source: https://tcrf.net/Persona_5_Royal/Unused_Graphics used an unused stamp

//knife image source: https://www.spriters-resource.com/playstation_3/persona5/sheet/92802/

const credits = `
<h2>Guides</h2>
<ul>
<li><a href="https://aqiu384.github.io/p5r-walkthrough/ace-walkthrough">Walkthrough by aqiu384.github.io</a></li>

<li><a href="https://samurai-gamers.com/persona-5/flower-shop-part-time-guide/">Flower Guide by samurai-gamers</a></li>
<li><a href="https://samurai-gamers.com/persona-5/triple-seven-convenience-store-part-time-job-guide/">Convenience Store Guide by samurai-gamers</a></li>
<li><a href="https://aqiu384.github.io/p5r-walkthrough/confidants">Confidant Guide by aqiu384.github.io</a></li>

<li><a href="https://joyceychen.com/persona5-negotiation/royal">Negotiation Guide by joyceychen.com</a></li>
<li><a href="https://aqiu384.github.io/megaten-fusion-tool/p5r/personas">Fusion Calculator by aqiu384.github.io</a></li>
</ul>

<h2>Assets</h2>
<ul>
<li><a href="https://www.reddit.com/r/Persona5/comments/kqickc/persona_5_menu_font_prototype/">Title Font</a></li>
<li><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2948225096&insideModal=0">Background source</a></li>
<li><a href="https://www.sounds-resource.com/playstation_3/persona5/sound/30366/">Knife Sound source</a></li>
<li><a href="https://www.spriters-resource.com/playstation_3/persona5/sheet/92802/">Knife Image source</a></li>
<li><a href="https://tcrf.net/Persona_5_Royal/Unused_Graphics">Web Icon</a></li>
</ul>
`;

const controls = `
<h2>Controls</h2>
<ul>
<li>Press Numpad +/- to go to the next/previous date.</li>
<li>Press Numpad 1-9 to open the sub-guides.</li>
<li>Press Esc to close the sub-guides.</li>
</ul>
`