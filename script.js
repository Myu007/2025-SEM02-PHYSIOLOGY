const questions = [
  {
    question: "Which of the following is the most important determinant of extracellular volume (ECF)?",
    answers: [
      { text: "Amount of Na+ in the ECF", correct: true },
      { text: "Amount of K+ in the ECF", correct: false },
      { text: "Protein content in the ECF", correct: false },
      { text: "Amount of Ca++ in the ECF", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is this Homeostasis",
    answers: [
      { text: "provides for the tight regulation of all physiological variables", correct: true },
      { text: "must always be restored using negative feedback mechanisms", correct: false },
      { text: "is the sum of all chemical reactions in the body", correct: false },
      { text: "is a combination of positive and negative feedback mechanisms", correct: false },
      { text: "is the sum of all physical reactions in the body", correct: false },
    ],
  },
  {
    question: "After you eat lunch, nerve cells in your stomach respond to the distension (the stimulus) resulting from the food. They relay this information to ________.",
    answers: [
      { text: "A control center", correct: true },
      { text: "A set point", correct: false },
      { text: "Effectors", correct: false },
      { text: "Sensors", correct: false },
      { text: "Receptors", correct: false },
    ],
  },
  {
    question: "Which electrolyte is the active transporter?",
    answers: [
      { text: "5 Na+ exchange for 2K+", correct: true },
      { text: "Increase in intracellular Na+ increases the activity of the pump", correct: false },
      { text: "Pump K+ against intracellular", correct: false },
      { text: "Pumps Na+ against a gradient", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following transport process doesn’t follow ‘saturation kinetics’:",
    answers: [
      { text: "Simple diffusion", correct: true },
      { text: "Symport active transport", correct: false },
      { text: "Facilitated diffusion", correct: false },
      { text: "Antiport active transpor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The sarcomere is a functional unit which gives skeletal and cardiac muscles their striated appearance, which was first described by Van Leeuwenhoek. A sarcomere is defined as the segment between two neighboring Z-lines. They act as an anchoring point of the actin filaments. Surrounding the Z-line is the region of the I-band. 1- Band is the zone of thin filaments that is not superimposed by thick filaments. Named for their properties under a polarizing microscope, an A-band contains the entire length of a single thick filament. The Anisotropic band contains both thick and thin filaments. Which of the following decreases in length during the contraction of skeletal muscle fiber?",
    answers: [
      { text: "I band of the sarcomere", correct: true },
      { text: "A band of the sarcomere", correct: false },
      { text: "Thick filaments", correct: false },
      { text: "Thin filaments", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where is extends Pseudo H zone in a sarcomere?",
    answers: [
      { text: "Two sides of M line", correct: true },
      { text: "Two I bands", correct: false },
      { text: "Two Z line", correct: false },
      { text: "A and I band", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "At rest, myosin heads are bound with adenosine diphosphate (said to be in a \"cocked\" position) in relation to the thin filament that does not have Ca 2+ bound to the troponin- tropomyosin complex. Ca 2+ bound to the troponin- tropomyosin complex induces a conformational change in the thin filament that allows for myosin heads to cross-bridge with thin filament actin. Which one of the following triggers the detachment of the myosin head from the actin filament?",
    answers: [
      { text: "Binding of ATP to head", correct: true },
      { text: "Entry of Ca into sarcoplasmic reticulum", correct: false },
      { text: "Change in troponin c configuration", correct: false },
      { text: "Hydrolysis of ATP to ADP and Pi", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following proteins is present in skeletal muscles, but absent in a smooth muscle?",
    answers: [
      { text: "Troponin", correct: true },
      { text: "Tropomyosin", correct: false },
      { text: "Actin", correct: false },
      { text: "Myosin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The intrafusal fibres of the striated skeletal muscles are innervated by one of the following type of motor neurons, Choose the correct answer:",
    answers: [
      { text: "Gamma", correct: true },
      { text: "Beta", correct: false },
      { text: "Alpha", correct: false },
      { text: "Delta", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The following is an example of a primarily inhibitory amino acid:",
    answers: [
      { text: "GABA", correct: true },
      { text: "Aspartate", correct: false },
      { text: "Somatostatin", correct: false },
      { text: "Glutamate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is relation between nerve thickness and conduction velocity:",
    answers: [
      { text: "Linear", correct: true },
      { text: "Parabolic", correct: false },
      { text: "Hyperbolic", correct: false },
      { text: "No relation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Across which of following is seen unidirectional transpot:",
    answers: [
      { text: "Synapse", correct: true },
      { text: "Axon", correct: false },
      { text: "Dendrite", correct: false },
      { text: "Cell body", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Arrange the following sequentially in the descending order of nerve impulse transmission velocity:",
    answers: [
      { text: "B-->D-->C-->A", correct: true },
      { text: "A-->D-->C-->B", correct: false },
      { text: "A-->C-->D-->B", correct: false },
      { text: "C-->A-->B-->D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a nucleus of basal ganglia?",
    answers: [
      { text: "Dentate nucleus", correct: true },
      { text: "Solitary nucleus", correct: false },
      { text: "Caudate nucleus", correct: false },
      { text: "Red nucleus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT caused by sympathetic stimulation?",
    answers: [
      { text: "Increased venous capacitance", correct: true },
      { text: "Increased HR", correct: false },
      { text: "Increased BP", correct: false },
      { text: "Increased total peripheral resistance", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A pool of presynaptic neurons innervate the dendrites of a postsynaptic neuron. Electrical signals are transferred from the dendrites to the soma of the postsynaptic neuron by which process?",
    answers: [
      { text: "Diffusion", correct: true },
      { text: "Capacitive discharge", correct: false },
      { text: "Active transport", correct: false },
      { text: "Electrotonic conduction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Smooth muscle cells also develop tonic and phasic contractions in response to changes in load or length. Regardless of the stimulus, smooth muscle cells use cross-bridge cycling between actin and myosin to develop force. And calcium ions (Ca2+) serve to initiate contraction. Smooth muscle contraction due to the release of calcium. Occurs because of",
    answers: [
      { text: "Calmodulin dependent myosin light chain kinase", correct: true },
      { text: "Calcium combining with troponin c", correct: false },
      { text: "Increased cGMP", correct: false },
      { text: "Increased cAMP", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following nerve ganglia are responsible for the secretion of saliva?",
    answers: [
      { text: "Trigeminal nerve", correct: true },
      { text: "Vagus nerve", correct: false },
      { text: "Olfactory nerve", correct: false },
      { text: "Optic nerve", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is the colored is the colored part of the eye?",
    answers: [
      { text: "Iris", correct: true },
      { text: "Retina", correct: false },
      { text: "Aqueous humor", correct: false },
      { text: "Cornea", correct: false },
      { text: "Skin", correct: false },
    ],
  },
  {
    question: "Which sense organ is primarily responsible for detecting odors and sending signals to then brain for interpretation?",
    answers: [
      { text: "Eyes", correct: true },
      { text: "Ears", correct: false },
      { text: "Nose", correct: false },
      { text: "Tongue", correct: false },
      { text: "Ears", correct: false },
    ],
  },
  {
    question: "Which of these organs is used to drain fluid from the inner ear into the throat?",
    answers: [
      { text: "Auditory tube", correct: true },
      { text: "Eustachian tube", correct: false },
      { text: "Semicircular canal", correct: false },
      { text: "Auditory canals", correct: false },
      { text: "Nose", correct: false },
    ],
  },
  {
    question: "The potential changes that initiate action potentials in the retina are generated by the action of light on photosensitive compounds in the rods and cones. When light is absorbed by these substances, their structure changes and this t riggers a sequence of event s that initiates the neural activity. Which of the following layers of the retina does light enter the eye pass through first?",
    answers: [
      { text: "Retinal ganglion layer", correct: true },
      { text: "Outer nuclear layer", correct: false },
      { text: "Outer plexiform layer", correct: false },
      { text: "Inner nuclear layer", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The afferent fibers in the auditory division of the 8th CN end in dorsal and ventral cochlear nuclei. From there, auditory impulses pass by various routes to the inferior colliculi, the centers for auditory reflexes, and via the medial geniculate body in the thalamus to the auditory cortex, which is located on",
    answers: [
      { text: "Superior part of temporal lobe", correct: true },
      { text: "Limbic system", correct: false },
      { text: "Posterior part of parietal lobe", correct: false },
      { text: "Occipital part", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The Organ of Corti on the basilar membrane extends from the apex to the base of the cochlea and thus has a spiral shape. This structure contains the highly specialized auditory receptors (hair cells) whose processes pierce the tough, membrane-like reticular lamina that is supported by the pillar cells or rods of Corti. Which of the following ions initiates the transmission of sound by the organ of Corti?",
    answers: [
      { text: "Potassium influx", correct: true },
      { text: "Sodium influx", correct: false },
      { text: "Sodium efflux", correct: false },
      { text: "Potassium refflux", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25-year-old student with 20/20 vision looks up from his book to view his girlfriend sitting on the other side of the room. Which of the following is most likely to occur when the student changes his view from his book to his girlfriend?",
    answers: [
      { text: "Thinner lens. relaxation of ciliary muscle", correct: true },
      { text: "Thicker lens, relaxation of ciliary muscle", correct: false },
      { text: "Thinner lens. contraction of ciliary muscle", correct: false },
      { text: "Thicker lens, contraction of ciliary muscle", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following components primarily engages in oxygen transport in blood?",
    answers: [
      { text: "hemoglobin", correct: true },
      { text: "albumin", correct: false },
      { text: "fibrinogen", correct: false },
      { text: "electrolytes", correct: false },
      { text: "antibodies", correct: false },
    ],
  },
  {
    question: "In which of the following is no counterflow mechanism observed?",
    answers: [
      { text: "Eye", correct: true },
      { text: "Heart", correct: false },
      { text: "Testes", correct: false },
      { text: "Kidney", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following changes occurs in RBCs of stored blood?",
    answers: [
      { text: "Increase in Na+ & decrease in K+ content", correct: true },
      { text: "Decrease in Na+ & K+ content", correct: false },
      { text: "Increase in Na+ & K+ content", correct: false },
      { text: "Increased activity of Na+ - K+ ATPase.", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Plasma is a transparent, straw-colored, liquid portion of the blood which is acquired after centrifuging blood with an anticoagulant. Serum is an undiluted fluid, the extracellular portion of blood that is acquired after centrifuging of coagulated blood. Which one of the following is present in both Serum and Plasma?",
    answers: [
      { text: "Fibrinogen", correct: true },
      { text: "Factor VII", correct: false },
      { text: "Factor V", correct: false },
      { text: "Factor II", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A woman whose blood type is A, Rh positive and a man whose blood type is B, Rh positive come to the clinic with a 3-year-old girl whose blood type is 0, Rh negative. Which of the following would be correct about the attitude of these two adults towards this child?",
    answers: [
      { text: "This couple can be the natural parents of this child", correct: true },
      { text: "The man can be the child's natural father, but the woman cannot be the natural mother", correct: false },
      { text: "Neither adult can be the natural parent of this child", correct: false },
      { text: "The woman can be the child's natural mother, but the man cannot be the natural father", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 2-year-old boy bleeds excessively from minor injuries and has previously had bleeding gums. The maternal grandfather has a bleeding disorder. The child's physical examination shows slight tenderness of his knee with fluid accumulation in the knee joint. Which of the following blood coagulation factors is deficient in this patient?",
    answers: [
      { text: "Factor X", correct: true },
      { text: "Factor II", correct: false },
      { text: "Factor VIII", correct: false },
      { text: "Factor III", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following describes the appearance of erythrocytes under a microscope?",
    answers: [
      { text: "Biconcave discs", correct: true },
      { text: "Spherical cells", correct: false },
      { text: "Irregular shapes", correct: false },
      { text: "Rod-shaped", correct: false },
      { text: "Concave discs", correct: false },
    ],
  },
  {
    question: "A patient has a congenital deficiency in factor XIII (fibrin-stabilizing factor). Which of following would analysis of his blood reveal?",
    answers: [
      { text: "Easily breakable clot", correct: true },
      { text: "Unbreakable clot", correct: false },
      { text: "Unchanged clot", correct: false },
      { text: "Difficultly breakable clot", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What are the \"Gate\" cells in the heart?",
    answers: [
      { text: "Cells in Purkinje fibers", correct: true },
      { text: "Cells in AV node", correct: false },
      { text: "Cells in his bundle", correct: false },
      { text: "Cells in SA node", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The greatest drop in systemic arterial blood pressure occurs in:",
    answers: [
      { text: "Pre-capillary resistance vessels", correct: true },
      { text: "Capacitance vessels", correct: false },
      { text: "Venules", correct: false },
      { text: "Arterioles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "If the Purkinje fibers, situated distal to the A-V junction, become the pacemaker of the heart, what is the expected heart rate?",
    answers: [
      { text: "30/min", correct: true },
      { text: "50/min", correct: false },
      { text: "60/min", correct: false },
      { text: "70/min", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The second heart sound (52) is a short burst of auditory vibrations of varying intensity, frequency, quality, and duration. It has 2 audible components, the aortic closure sound (A2) and the pulmonic closure sound (P2). Which are normally split on inspiration and virtually single on expiration. s2 is produced in part by hemodynamic events immediately following the closure of the aortic and pulmonic valves. s2 occurs during?",
    answers: [
      { text: "First rapid filling", correct: true },
      { text: "Sovolumic relaxation", correct: false },
      { text: "Protodiastole", correct: false },
      { text: "Diastasis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The first reactive change to occur after haemorrhage is:",
    answers: [
      { text: "Tachycardia", correct: true },
      { text: "Vasoconstriction", correct: false },
      { text: "Raised cortisol", correct: false },
      { text: "Raised adrenaline", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which phase of the cardiac action potential is responsible for the refractory period?",
    answers: [
      { text: "Plateau", correct: true },
      { text: "Depolarization", correct: false },
      { text: "Hyperpolarization", correct: false },
      { text: "Rapid repolarization", correct: false },
      { text: "Resting phase", correct: false },
    ],
  },
  {
    question: "A hospitalized patient has an ejection fraction of 0.4, a heart rate of 95 beats/min, and a cardiac output of 3.5 L/min. What is the patient's end-diastolic volume?",
    answers: [
      { text: "92ml", correct: true },
      { text: "37ml", correct: false },
      { text: "55ml", correct: false },
      { text: "14 ml", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "lncisura\" of the arterial pulse corresponds to:",
    answers: [
      { text: "Closure of the aortic valve", correct: true },
      { text: "First heart sound", correct: false },
      { text: "lsovolumetric relaxation", correct: false },
      { text: "Third heart sound", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Baroreoceptors are very important in the short-term control of arterial pressure. Activation of the reflex allows for rapid adjustments in blood pressure in response to abrupt changes in posture, blood volume, cardiac output, or peripheral resistance during exercise. If both the carotids are occluded proximal to the carotid bifurcation, what would it cause?",
    answers: [
      { text: "BP and = heart rate", correct: true },
      { text: "↓ BP and ↓ heart rate", correct: false },
      { text: "↑BP and ↓ heart rate", correct: false },
      { text: "↑BP and ↑heart rate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pleural pressure is positive in:",
    answers: [
      { text: "End of forced expiration", correct: true },
      { text: "End of expiration", correct: false },
      { text: "End of inspiration", correct: false },
      { text: "Start or beginning of inspiration", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Non-respiratory lung functions are many and varied. Active roles include active defense mechanisms, heme fluency, lipid metabolism, and biological interactions with plasma. Which of the following is not a metabolic function of the lung?",
    answers: [
      { text: "Inactivation of vasopressin", correct: true },
      { text: "Inactivation of bradykinin", correct: false },
      { text: "Formation of angiotensin II", correct: false },
      { text: "Synthesis of surfactant", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "How many the partial pressure of O2 at atmosphere pressure of 760 mm of Hg:",
    answers: [
      { text: "160 mm of Hg", correct: true },
      { text: "76 mm of Hg", correct: false },
      { text: "120 mm of Hg", correct: false },
      { text: "140 mm of Hg", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is used to measure the resistance in small airways:",
    answers: [
      { text: "Mid expiratory flow rate", correct: true },
      { text: "FEV1", correct: false },
      { text: "Vital capacity", correct: false },
      { text: "Closing volume", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not stimulated Carotid body",
    answers: [
      { text: "Anaemic hypoxia", correct: true },
      { text: "Hypoxic hypoxia", correct: false },
      { text: "Stagnant hypoxia", correct: false },
      { text: "Histotoxic hypoxia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Lung capacity or total lung capacity (TLC) is the volume of air in the lungs upon the maximum effort of inspiration. Among healthy adults, the average lung capacity is about 6 liters. Age, gender, body composition, and ethnicity are factors affecting the different ranges of lung capacity among individuals. TLC rapid increases from birth to adolescence and plateaus at around 25 years old. The Total lung capacity depends upon which one of the following?",
    answers: [
      { text: "Elasticity properties of the lung", correct: true },
      { text: "Surface tension of the lung", correct: false },
      { text: "Size of airways of the lung", correct: false },
      { text: "Surfactant realizing of the lung", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The conducting airway is made up of a variety of specialized cells that provide more than simply a conduit for air to reach the lung. The mucosal epithelium is attached to a thin basement membrane and beneath this, the lamina propria. Collectively these are referred to as the \"airway mucosa.\" Which of the following is referred to be conducting zone of the respiratory system?",
    answers: [
      { text: "Oth generation to 16th generation of airways", correct: true },
      { text: "1st generation of airways", correct: false },
      { text: "0th generation to 23rd generation of airways", correct: false },
      { text: "16th to 23rd generation of airways", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pulmonary vasoconstriction is a physiological phenomenon and mechanism in response to alveolar hypoxia or low o2 partial pressures in the pulmonary arterioles and, to some extent, the pulmonary venules. Pulmonary vasoconstriction redirects blood flow within the vasculature away from poorly ventilated parts of the lungs towards better-ventilated portions. The most potent vasoconstrictor of the pulmonary artery is?",
    answers: [
      { text: "Hypoxia", correct: true },
      { text: "Hypercapnia", correct: false },
      { text: "Hyperoxia", correct: false },
      { text: "Hypocapnia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of hypoxia does not stimulate peripheral chemoreceptors?",
    answers: [
      { text: "Anemic", correct: true },
      { text: "Histotoxic", correct: false },
      { text: "Stagnant", correct: false },
      { text: "Hypoxic", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "T3 has much greater biological activity than T4 and is specifically generated at its site of action in peripheral tissues by deiodination of T4. Both hormones are iodine containing amino acids. By which of the following types of transport across the cell membrane are iodide ions transported into the thyroid gland?",
    answers: [
      { text: "Receptor-mediated endocytosist", correct: true },
      { text: "Simple diffusion", correct: false },
      { text: "Pinocytosis", correct: false },
      { text: "Active transport", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hormones isn't depressed when hypothalamic function decreases?",
    answers: [
      { text: "Prolactine", correct: true },
      { text: "Growth hormon", correct: false },
      { text: "TSH", correct: false },
      { text: "ACTH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In which of the following glands is the sodium-iodide symporter not present?",
    answers: [
      { text: "Adrenal glands", correct: true },
      { text: "Thyroid glands", correct: false },
      { text: "Mammary glands", correct: false },
      { text: "Salivary glands", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which set of the following hormones have nuclear receptor ?",
    answers: [
      { text: "Estrogen, Thyroid", correct: true },
      { text: "Estrogen, thyroxin & glucagon", correct: false },
      { text: "Estrogen, thyroxin & TSH", correct: false },
      { text: "Retinoic acid, thyroxin & Luteinizing hormone (LH)", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In vertebrate anatomy, the pituitary gland, or hypophysis, is an endocrine gland, about the size of a pea and weighing 0.5 grams (0.018 oz) in humans. Which anterior pituitary hormone plays a major role in the regulation of a nonendocrine target gland?",
    answers: [
      { text: "Prolactin", correct: true },
      { text: "TSH", correct: false },
      { text: "ACTH", correct: false },
      { text: "FSH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A man eats a low-carbohydrate meal that is rich in proteins containing the amino acids that stimulate insulin secretion. Which f the following response accounts for the absence of hypoglycemia?",
    answers: [
      { text: "Stimulation of glucagon secretion", correct: true },
      { text: "Suppression of somatomedin C secretion", correct: false },
      { text: "Stimulation of cortisol secretion", correct: false },
      { text: "Suppression of GH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old Indian immigrant presents to the physician with significantly enlarged thyroid gland. Serum T3/T4 levels are decreased. Iodine deficiency is suspected. Which of the following is the function of thyroid peroxidase?",
    answers: [
      { text: "Oxidation of iodide", correct: true },
      { text: "Uptake of Na+-Iodide", correct: false },
      { text: "Synthesis of iodide", correct: false },
      { text: "Deiodination of Iodo-tyrosine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the main target organ for the hormone adrenocorticotropic hormone (ACTH)?",
    answers: [
      { text: "Adrenal cortex", correct: true },
      { text: "Kidneys", correct: false },
      { text: "Liver", correct: false },
      { text: "Pancrease", correct: false },
      { text: "ovary", correct: false },
    ],
  },
  {
    question: "What is the primary role of antidiuretic hormone (ADH)?",
    answers: [
      { text: "Promoting water reabsorption in the kidneys", correct: true },
      { text: "Stimulating the release of glucose from the liver", correct: false },
      { text: "Reducing blood glucose levels", correct: false },
      { text: "Increasing heart rate and blood pressure", correct: false },
      { text: "Stimulating the secretion of cortisol from the adrenal glands", correct: false },
    ],
  },
  {
    question: "Which of the following hormones has a permissive action at the onset of puberty?",
    answers: [
      { text: "leptin", correct: true },
      { text: "Insulin", correct: false },
      { text: "GnRH", correct: false },
      { text: "Growth hormone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hormones is mediated anabolic action on protein?",
    answers: [
      { text: "Testosterone", correct: true },
      { text: "Insulin", correct: false },
      { text: "ACTH", correct: false },
      { text: "TSH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which types of receptors present in testes?",
    answers: [
      { text: "FSH", correct: true },
      { text: "LH", correct: false },
      { text: "prolactin", correct: false },
      { text: "GnRH", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following hormones concentration controls by LH in men?",
    answers: [
      { text: "Testosterone", correct: true },
      { text: "Prolactin", correct: false },
      { text: "Estrogen", correct: false },
      { text: "Oxytocin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "When will be ovulation in women with 28-day cycle?",
    answers: [
      { text: "14 days before menstruation", correct: true },
      { text: "5 days before menstruation", correct: false },
      { text: "10 days before menstruation", correct: false },
      { text: "25 days before menstruation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the dominant hormone in the luteal phase?",
    answers: [
      { text: "Progesterone", correct: true },
      { text: "Estrogen", correct: false },
      { text: "Prolactin", correct: false },
      { text: "Oxytocin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year-old pregnant woman at 8 weeks gestation presents with nausea, vomiting, and breast tenderness. Which hormonal change is most likely responsible for these symptoms?",
    answers: [
      { text: "Increased estrogen", correct: true },
      { text: "Decreased progesterone", correct: false },
      { text: "Increased prolactin", correct: false },
      { text: "Decreased hCG", correct: false },
      { text: "Increased oxytocin", correct: false },
    ],
  },
  {
    question: "A woman is in labor and experiencing strong uterine contractions. The release of which hormone is most likely contributing to both uterine contractions and milk ejection?",
    answers: [
      { text: "Oxytocin", correct: true },
      { text: "Estrogen", correct: false },
      { text: "Prolactin", correct: false },
      { text: "Relaxin", correct: false },
      { text: "Progesterone", correct: false },
    ],
  },
  {
    question: "Where are short-chain fatty acids which produced by bacteria maximally absorbed?",
    answers: [
      { text: "Colon", correct: true },
      { text: "Jejunum", correct: false },
      { text: "Ileum", correct: false },
      { text: "Duodenum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "How much bile is secreted per day?",
    answers: [
      { text: "Secretion 800-1000 ml/Day", correct: true },
      { text: "Secretion 200-500 ml/Day", correct: false },
      { text: "Secretion 50 -80 ml/Day", correct: false },
      { text: "Secretion 100-150 ml/Day", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following activated salivary amylase?",
    answers: [
      { text: "Na+", correct: true },
      { text: "K+", correct: false },
      { text: "HCO3-", correct: false },
      { text: "Cl-", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a function of gastrin?",
    answers: [
      { text: "Gastric secretion increase", correct: true },
      { text: "Auguments the action of CCK", correct: false },
      { text: "Contraction of pyloric sphincter", correct: false },
      { text: "Stimulate bicarbonate secretion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following does not increased absorption of calcium from gut?",
    answers: [
      { text: "High sodium in diet", correct: true },
      { text: "Lactose in diet", correct: false },
      { text: "Calcium rich food in diet", correct: false },
      { text: "Protein in diet", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not secreted by the pancreas?",
    answers: [
      { text: "Pepsinogen", correct: true },
      { text: "Procarboxypeptidase", correct: false },
      { text: "Trypsinogen", correct: false },
      { text: "Phospholipase A", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Gastric secretion is stimulated by the act of eating (cephalic phase) and the arrival of food in the stomach (gastric phase). The arrival of the food in the intestine also controls gastric secretion (intestinal phase). Gastric secretion of acid stimulation of the oral and gastric vagal afferents. Efferent vagal pathways synapse with submucous plexus neurons, which innervate secretory cells via several important bioactive molecules, including gastrin, histamine, and somatostatin. Which of the following does not secreted within the stomach?",
    answers: [
      { text: "Trypsin", correct: true },
      { text: "Intrinsic factor", correct: false },
      { text: "Lipase", correct: false },
      { text: "Mucus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Endopeptidases are a group of hydrolases that catalyze the hydrolysis of peptidic bonds, and thus, hydrolyze proteins. These enzymes are also very chemo-, regio- and enantioselective, which are active under soft reaction conditions (pH 6-8) and are easily handled biocatalysts that do not require the presence of cofactors. They break peptide bonds of nonterminal amino acids (i.e. within the molecule). For this reason, endopeptidases cannot break down peptides into monomers. They are usually very specific for certain amino acids. Which of the following are not endopeptidases?",
    answers: [
      { text: "Carboxypeptidases", correct: true },
      { text: "Chymotrypsin", correct: false },
      { text: "Elastase", correct: false },
      { text: "Trypsin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What doesn’t lie in renal medulla",
    answers: [
      { text: "Juxta glomerular apparatus", correct: true },
      { text: "Collecting duct", correct: false },
      { text: "Loop of Henle", correct: false },
      { text: "Vasa recta", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not an effect of Angiotensin II?",
    answers: [
      { text: "Increased diameter of blood vessels", correct: true },
      { text: "Increased of Aldosterone secretion", correct: false },
      { text: "Increased ADH secretion", correct: false },
      { text: "Increased of thirst", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where does urine acidification occur?",
    answers: [
      { text: "Proximal convoluted tubule", correct: true },
      { text: "Distal convoluted tubule", correct: false },
      { text: "Loop of Henle", correct: false },
      { text: "Collecting duct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is responsible for neutralization hydrochloric acid?",
    answers: [
      { text: "Bicarbonates", correct: true },
      { text: "Plasma protein", correct: false },
      { text: "Phosphates", correct: false },
      { text: "Nitrates", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Relaxation of mesangial cells of kidney is brought about by:",
    answers: [
      { text: "ANP", correct: true },
      { text: "PGF2", correct: false },
      { text: "Vasopressin", correct: false },
      { text: "Endothelin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "ADH primarily affects the ability of the kidney to reabsorb water; when present, ADH induces expression of water transport proteins in the late distal tubule and collecting duct to increase water reabsorption. Which of the following results in increase ADH activity?",
    answers: [
      { text: "Hyponatremia", correct: true },
      { text: "Hyperkalemia", correct: false },
      { text: "Hyperchloremia", correct: false },
      { text: "Hypocalcemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Experimental studies are conducted to study renal tubular transport proteins. A new drug is developed that specifically and completely inhibits glucose transport in proximal renal tubules. Which of the following substances has the same clearance as these drug?\"",
    answers: [
      { text: "Inulin", correct: true },
      { text: "PAH", correct: false },
      { text: "Potassium", correct: false },
      { text: "Sodium", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is effective renal plasma flow (in ml/ min) in human’s?",
    answers: [
      { text: "625", correct: true },
      { text: "425", correct: false },
      { text: "525", correct: false },
      { text: "725", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are not features of exercise?",
    answers: [
      { text: "Left shift of Hb-O2 dissociation curve", correct: true },
      { text: "Rightward shift of Hb-O2 dissociation curve", correct: false },
      { text: "Sigmoidal shape of Hb-O2 dissociation curve", correct: false },
      { text: "S-shape of Hb-O2 dissociation cruve", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the main cause of increased blood flow to exercising muscles?",
    answers: [
      { text: "Vasodilatation due to local metabolites", correct: true },
      { text: "Vasodilatation due to hormonal activity", correct: false },
      { text: "Vasodilatation due to increased sympathetic discharge to peripheral vessels", correct: false },
      { text: "Vasodilatation due to increased parasympathetic discharge to peripheral vessels", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which Exercise is also prescribed as an adjuvant treatment for depression. Most probably is acts by?",
    answers: [
      { text: "Raising endorphin levels", correct: true },
      { text: "Raising dopamine levels", correct: false },
      { text: "Raising serotonin levels", correct: false },
      { text: "Raising GABA levels", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not seen in strenuous exercise?",
    answers: [
      { text: "Increases of calcium concentration", correct: true },
      { text: "Increases of Oxygen storage", correct: false },
      { text: "Increases of glycogen storage", correct: false },
      { text: "Increases size of mitochondria", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Vigorous physical activity (such as exercise or hard labor) increases the body's demand for oxygen. The first-line physiologic response to this demand is an increase in heart rate, breathing rate, and depth of breathing. During heavy exercise, dyspnea will appear when the dyspneic index will fall just below?",
    answers: [
      { text: "0.7", correct: true },
      { text: "0.85", correct: false },
      { text: "0.6", correct: false },
      { text: "0.4", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of following energy systems uses almost entirely in muscle metabolism during 100-meter dash",
    answers: [
      { text: "Phosphagen system", correct: true },
      { text: "Aerobic system", correct: false },
      { text: "Glycogen-Lactic acid system", correct: false },
      { text: "ATP system", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the primary function of the immune system? ",
    answers: [
      { text: "Defense against pathogens ", correct: true },
      { text: "Digestion ", correct: false },
      { text: "Respiration ", correct: false },
      { text: "Blood circulation", correct: false },
      { text: "Temperature regulation ", correct: false },
    ],
  },
  {
    question: "What is the term for the ability of the immune system to remember and respond more effectively to a previously encountered pathogen? ",
    answers: [
      { text: "Immune memory ", correct: true },
      { text: "Adaptive immunity.", correct: false },
      { text: "Inflammation ", correct: false },
      { text: "Passive immunity ", correct: false },
      { text: "Immune suppression", correct: false },
    ],
  },
  {
    question: "Which of the following is not seen in humans?",
    answers: [
      { text: "Estrous cycle", correct: true },
      { text: "Menstrual cycle", correct: false },
      { text: "Endometrial cycle", correct: false },
      { text: "Ovarian cycle", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Opioids are a commonly used analgesic that can exert their effects at various places in the CNS including in the spinal cord and dorsal root ganglia. lnterneurons that utilize the neurotransmitter enkephalin to inhibit afferent pain signals are most likely to be found in which region of the central nervous system?",
    answers: [
      { text: "Dorsal horn of spinal cord", correct: true },
      { text: "Postcentral gyrus", correct: false },
      { text: "Precentral gyrus", correct: false },
      { text: "Ventral horn of spinal cord", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The main difference between superficial and deep or visceral pain is the nature of the pain evoked by noxious stimuli. Pain can be elicited experimentally from the periosoteum and ligaments by injecting hypertonic saline into them. Which statement concerning visceral pain signals is correct?",
    answers: [
      { text: "They are transmitted along sensory fibers that course mainly with sympathetic nerves in the abdomen and thorax", correct: true },
      { text: "They are not stimulated by ischemia in visceral organs", correct: false },
      { text: "They are transmitted only by the lightly myelinated δ-type A sensory fibers", correct: false },
      { text: "They are typically well localized", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which The maximum contractile force of any muscle per square cm cross-sectional area is?",
    answers: [
      { text: "215-17 kg/cm2", correct: true },
      { text: "5-6 kg/cm2", correct: false },
      { text: "10-12 kg/cm2", correct: false },
      { text: "3-4 kg/cm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Nonshivering thermogenesis was originally defined as a cold-induced increase in heat production not associated with the muscle activity of shivering. Nonshivering thermogenesis in adults is due to?",
    answers: [
      { text: "Noradrenaline", correct: true },
      { text: "Brown fat between the shoulders", correct: false },
      { text: "Thyroid hormone", correct: false },
      { text: "Muscle metabolism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Malignant hyperthermia - The major features of the syndrome- hyperthermia, muscle rigidity, and an increased metabolic rate led early investigators to suggest that MH is a disease of abnormal regulation of muscle contraction. Treatment is with dantrolene and rapid cooling along with other supportive measures. In malignant hyperthermia, excess heat production is due to?",
    answers: [
      { text: "Mitochondrial thermogenesis", correct: true },
      { text: "Increased muscle metabolism by an excess of calcium ions", correct: false },
      { text: "Increased sympathetic discharge", correct: false },
      { text: "Thermic effect of food", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "For scientific and clinical purposes, pain is defined by the International Association for the Study of Pain (IASP) as \"an unpleasant sensory and emotional experience associated with actual or potential tissue damage, or described in terms of such damage.\" The highest degree of pain localization comes from which of the following?",
    answers: [
      { text: "Simultaneous stimulation of free nerve endings and C fibers", correct: true },
      { text: "Stimulation of free nerve endings by bradykinin and A fibers", correct: false },
      { text: "Stimulation of free nerve endings by serotonin and Aβ fibers", correct: false },
      { text: "Stimulation of free nerve endings and B fibers", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Clathrins used in:",
    answers: [
      { text: "Receptor mediated endocytosis", correct: true },
      { text: "Exocytosis", correct: false },
      { text: "Cell to cell adhesion", correct: false },
      { text: "Plasma membrane", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Receptors on cell membrane that activate ion channel after binding with agonists are",
    answers: [
      { text: "Nicotinic cholinergic", correct: true },
      { text: "Muscarinic cholinergic", correct: false },
      { text: "Opioid μ receptors", correct: false },
      { text: "GABAB receptors", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Energy producing enzymes are located in:",
    answers: [
      { text: "Mitochondria", correct: true },
      { text: "Ribosomes", correct: false },
      { text: "Golgi apparatus", correct: false },
      { text: "Rough endoplasmic reticulum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a normal physiologic process that uses a positive feedback loop?",
    answers: [
      { text: "Childbirth", correct: true },
      { text: "Temperature regulation", correct: false },
      { text: "Urine formation regulation", correct: false },
      { text: "Blood pressure regulation", correct: false },
      { text: "Regulation of fluid balance", correct: false },
    ],
  },
  {
    question: "What is the target of calcium channels blockers:",
    answers: [
      { text: "Vascular smooth muscle", correct: true },
      { text: "Skeletal muscle", correct: false },
      { text: "Cardiac muscles", correct: false },
      { text: "Visceral smooth muscle", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Cell junction in single unit type of smooth muscle is:",
    answers: [
      { text: "Gap junction", correct: true },
      { text: "Macula adherens", correct: false },
      { text: "Tight junction", correct: false },
      { text: "Zonula adherens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following does not apply to the layers of connective tissue of skeletal muscles?",
    answers: [
      { text: "Penmyslum", correct: true },
      { text: "Sarcolemma", correct: false },
      { text: "Endomysium", correct: false },
      { text: "Epimysrum", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is a regulatory muscle protein",
    answers: [
      { text: "Tropomyosin", correct: true },
      { text: "Actin", correct: false },
      { text: "Tropomodulin", correct: false },
      { text: "Dystrophin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The EPP is actually made up of multiple MEPPs, which arise when an activated terminal releases hundreds of neurotransmitter quanta. A series of EPPs, or a number of them stimulated simultaneously at many synapses, can then bring the cell to the threshold of the action potential. This combined action of EPPs is called summation. Miniature end plate potential (MEPP) is",
    answers: [
      { text: "Responsible for excitation of the muscle", correct: true },
      { text: "Recorded in resting muscle", correct: false },
      { text: "Inhibited by anticholinesterases", correct: false },
      { text: "Of 5 to 10 mV amplitude", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Motor area in cerebrum is mainly associated with:",
    answers: [
      { text: "Performing all voluntary movements", correct: true },
      { text: "Performing an involuntary movement", correct: false },
      { text: "Executing fine movements", correct: false },
      { text: "Controlling all motor activity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Thalamus relay all sensory sensations except:",
    answers: [
      { text: "Olfaction", correct: true },
      { text: "Temperature", correct: false },
      { text: "Touch", correct: false },
      { text: "Auditory", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In a neuron, graded electro genesis occurs at:",
    answers: [
      { text: "Axon", correct: true },
      { text: "Initial segment", correct: false },
      { text: "Soma-dendritic zone", correct: false },
      { text: "Nerve ending", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following has direct connections with the Flocculonodular lobe?",
    answers: [
      { text: "Vestibular nucleus", correct: true },
      { text: "Inferior olivary nucleus", correct: false },
      { text: "Red nucleus", correct: false },
      { text: "Dentate nucleus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 56 yr. old woman presents with abnormal movements of the limbs. A lesion of I the globus pallidus is suspected. Which of the following conditions can be suspected?",
    answers: [
      { text: "Athetosis", correct: true },
      { text: "Chorea", correct: false },
      { text: "Hemiballismus", correct: false },
      { text: "Parkinsonism", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which part of the basal ganglia receives the afferent input?",
    answers: [
      { text: "Striatum", correct: true },
      { text: "Globus pallidus", correct: false },
      { text: "Striatum nigra", correct: false },
      { text: "Subthalamic nuclei", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following sensations doesn’t transmits by Spinothalamic tract:",
    answers: [
      { text: "Proprioception", correct: true },
      { text: "Pain", correct: false },
      { text: "Temperature", correct: false },
      { text: "Touch", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are climbing fibers?",
    answers: [
      { text: "Olivocerebellar fibers", correct: true },
      { text: "Spinocerebellar fibers", correct: false },
      { text: "Pontocerebellar fibers", correct: false },
      { text: "Vestibulocerebellar fibers", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Myelin loss can occur as a result of direct damage to the myelin sheath or indirectly through a primarily genetic disorder or attack during inflammation or toxic exposure. In addition, axon degeneration will lead to secondary loss of the myelin sheath (as in Wallerian degeneration). In genetic disease in which there is a failure of normal myelination, the CNS white matter is either hypomyelinated or dysmyelinated. The Myelin in CNS is formed by which of the following cells?",
    answers: [
      { text: "Microglia", correct: true },
      { text: "Schwann cells", correct: false },
      { text: "Oligodendrocytes", correct: false },
      { text: "Astrocytes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is the body’s largest organ?",
    answers: [
      { text: "Skin", correct: true },
      { text: "Brain", correct: false },
      { text: "Large intestine", correct: false },
      { text: "Liver", correct: false },
      { text: "Tongue", correct: false },
    ],
  },
  {
    question: "Which of the are referred to as the layers of the skin?",
    answers: [
      { text: "Dermis and epidermis", correct: true },
      { text: "Hair and sweat glans", correct: false },
      { text: "Pores and sebarous gland", correct: false },
      { text: "None of the above", correct: false },
      { text: "Retina", correct: false },
    ],
  },
  {
    question: "Whatare the sensory receptors in your skin that are specialized to report information about changes in temperature are the",
    answers: [
      { text: "temperature changes.", correct: true },
      { text: "hair follicle receptors.", correct: false },
      { text: "Meissner’s corpuscles.", correct: false },
      { text: "Pacinian corpuscles.", correct: false },
      { text: "neuropsychology.", correct: false },
    ],
  },
  {
    question: "When you drink coffee, your perceptual experience is a combination of information from your taste and smell receptors?",
    answers: [
      { text: "taste", correct: true },
      { text: "flavor", correct: false },
      { text: "smell", correct: false },
      { text: "gustation", correct: false },
      { text: "temperature.", correct: false },
    ],
  },
  {
    question: "When the sense of taste and smell depend on cells designed to detect",
    answers: [
      { text: "chemicals.", correct: true },
      { text: "vibrations.", correct: false },
      { text: "temperature", correct: false },
      { text: "air pressure.", correct: false },
      { text: "Taste buds", correct: false },
    ],
  },
  {
    question: "What is the function of a sensory receptor to",
    answers: [
      { text: "transducer", correct: true },
      { text: "frequency modifier", correct: false },
      { text: "electrical signal", correct: false },
      { text: "action potential", correct: false },
      { text: "are fast to adapt", correct: false },
    ],
  },
  {
    question: "The structure(s) associated with sensing changes in the position of the head are:",
    answers: [
      { text: "The semicircular canals", correct: true },
      { text: "The cochlea", correct: false },
      { text: "The fovea", correct: false },
      { text: "The incus and stapes", correct: false },
      { text: "The ossicles", correct: false },
    ],
  },
  {
    question: "Information from both ears converges on each superior olive and beyond this, most of the neurons respond to inputs from both sides. In humans, low tones are represented antero-laterally and high tones posteromedially in the auditory cortex. Which one of the following structures is not a part of the auditory pathway?",
    answers: [
      { text: "Medial lemniscus", correct: true },
      { text: "Lateral lemniscus", correct: false },
      { text: "Inferior colliculus", correct: false },
      { text: "Medial geniculate body", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following describes the process of hemostasis following a vascular injury?",
    answers: [
      { text: "Formation of a platelet plug followed by coagulation", correct: true },
      { text: "Direct activation of clotting factors without platelet involvement", correct: false },
      { text: "Vasodilation leading to increased blood flow", correct: false },
      { text: "Decrease in blood cell production by the bone marrow", correct: false },
      { text: "Expansion of blood vessels to reduce flow", correct: false },
    ],
  },
  {
    question: "Which of the following characters describes the Rh factor?",
    answers: [
      { text: "A protein on the surface of red blood cells", correct: true },
      { text: "A carbohydrate antigen", correct: false },
      { text: "A blood type system independent of the ABO system", correct: false },
      { text: "A type of antibody found in plasma", correct: false },
      { text: "A type of antigen which is present in the cell", correct: false },
    ],
  },
  {
    question: "The average normal hemoglobin content of blood is 16 g/dl in men and 14 g/dl in women, all of it in red cells. In the body of a 70-kg man, there are about 900 g of hemoglobin, and 0.3 g of hemoglobin is destroyed and 0.3 g synthesized every hour. The heme portion of the hemoglobin molecule is synthesized from glycine and Succinyl-CoA. Which of the following is Hemoglobin estimation is done by all of the following, except?",
    answers: [
      { text: "Drabkins method", correct: true },
      { text: "Sahli's method", correct: false },
      { text: "Spectrophotometry", correct: false },
      { text: "Wintrobe method", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Erythropoiesis is the process in which new erythrocytes are produced. These new erythrocytes replace the oldest erythrocytes (normally about one percent) that are phagocytosed and destroyed each day. Erythroblasts require folate and vitamin 812 for proliferation during their differentiation. Which of the following function that is critical to hematopoiesis, requires Vit 812 and folate?",
    answers: [
      { text: "Support terminal differentiation of erythroid and myeloid cells", correct: true },
      { text: "Serve as cofactors for iron uptake", correct: false },
      { text: "Support porphyrin production", correct: false },
      { text: "D. Support production of thymidine triphosphate", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The cytoskeletons of the leukocytes are reorganized in such a way that the leukocytes are spread out over the endothelial cells. In this form, leukocytes extend pseudopodia and pass through gaps between endothelia l cells. Transmigration of the leukocyte occurs as PECAM proteins, found on the leukocyte and endothelia cell surfaces, interact and effectively pull the cell through the endothelium. The entire process of blood vessel escape is known as diapedesis. Once in the interstitial fluid, leukocytes migrate along a chemotactic gradient towards the site of injury or infection. In which of the following does transmigration of leukocytes occur in response to infectious agents?",
    answers: [
      { text: "Venules", correct: true },
      { text: "Lymphatic ducts", correct: false },
      { text: "Arterioles", correct: false },
      { text: "Inflamed arteries", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The concept of blood coagulation dates back to 1960s when Davie, Ratnoff, and Macfarlane described the \"waterfall\" and \"cascade\" theories outlining the fundamental principle of a cascade of proenzymes leading to activation of downstream enzymes. Haemostasis, defined as the arrest of bleeding, comes from Greek, 'haeme' meaning blood and 'stasis' meaning to stop. Which of the following pathways causes coagulation of blood entering the capillary?",
    answers: [
      { text: "Fibrin stabilization", correct: true },
      { text: "Intrinsic pathway", correct: false },
      { text: "Constriction of the blood vessels", correct: false },
      { text: "Extrinsic pathway", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following describes the affinity of fetal hemoglobin (HbF) compared to adult hemoglobin (HbA)?",
    answers: [
      { text: "HbF has a higher affinity for oxygen", correct: true },
      { text: "HbF has a lower affinity for oxygen", correct: false },
      { text: "HbF binds CO2 more effectively", correct: false },
      { text: "HbA and HbF have equal affinities", correct: false },
      { text: "HbF does not transport oxygen", correct: false },
    ],
  },
  {
    question: "Which of the following physical characteristics is most notable for platelets?",
    answers: [
      { text: "Small, disc-shaped, and anucleate", correct: true },
      { text: "Large, spherical, and multinucleate", correct: false },
      { text: "Biconcave and flexible", correct: false },
      { text: "Irregular and amoeboid", correct: false },
      { text: "Tube-shaped and biconvex", correct: false },
    ],
  },
  {
    question: "Which heart sound heard immediately before the first heart sound when atrial pressure is high:",
    answers: [
      { text: "Fourth", correct: true },
      { text: "Second", correct: false },
      { text: "Third", correct: false },
      { text: "First", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The cardiac muscle has the unique property of contracting and repolarizing faster when the heart rate is high and the duration of systole decreases from 0.27 s at a heart rate of 65 to 0.16 s at a rate of 200 beats/min. Which is the fastest conducting part of the heart?",
    answers: [
      { text: "Purkinje fibers", correct: true },
      { text: "AV node", correct: false },
      { text: "Bundle branches", correct: false },
      { text: "SA node", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Because it has a prolonged action potential, cardiac muscle cannot contract in response to a second stimulus until near the end of the initial contraction. Therefore, cardiac muscle cannot be tetanized like skeletal muscle. Among the following, the last part of the ventricle to be depolarized is?",
    answers: [
      { text: "Epicardium of the base of LV", correct: true },
      { text: "Myocardium of the base of LV", correct: false },
      { text: "Endocardium of the base of LV", correct: false },
      { text: "Pericardium of the base of LV", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Heart sounds are the noises generated by the beating heart and the resultant flow of blood through it. Specifically, the sounds reflect the turbulence created when the heart valves snap shut. In cardiac auscultation, an examiner may use a stethoscope to listen for these unique and distinct sounds that provide important auditory data regarding the condition of the heart. True statement about the heart sounds?",
    answers: [
      { text: "2 has higher frequency but shorter duration compared to S1", correct: true },
      { text: "S1 is of higher frequency and longer duration as compared to S2", correct: false },
      { text: "S2 is of higher frequency and longer duration as compared to S1", correct: false },
      { text: "S1 has higher frequency but shorter duration compared to S2", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What percentage of ventricular filling occurs passively before atrial systole?",
    answers: [
      { text: "0.7", correct: true },
      { text: "0.2", correct: false },
      { text: "0.4", correct: false },
      { text: "0.9", correct: false },
      { text: "1", correct: false },
    ],
  },
  {
    question: "What determines the end of the ventricular ejection phase?",
    answers: [
      { text: "Closure of the semilunar valves", correct: true },
      { text: "Opening of the AV valves", correct: false },
      { text: "Opening of the semilunar valves", correct: false },
      { text: "Atrial contraction", correct: false },
      { text: "Ventricular relaxation begin", correct: false },
    ],
  },
  {
    question: "When capillary and interstitial hydrostatic pressures are 30 mm of Hg and 5 mm of Hg and colloid oncotic pressure of capillaries and interstitium are 25 mm of Hg and 5 mm of Hg, what is the Net Filtration Pressure?",
    answers: [
      { text: "5mmHg", correct: true },
      { text: "10 mm Hg", correct: false },
      { text: "15 mm Hg", correct: false },
      { text: "20mm Hg", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The jugular venous pressure is usually assessed by observing the right side of the patient's neck. The normal mean jugular venous pressure, determined as the vertical distance above the midpoint of the right atrium, is 6 to 8 cm H20. Deviations from this normal range reflect either hypovolemia or impaired cardiac filling. 'Y' descent in the JVP is due to?",
    answers: [
      { text: "Atrial diastole", correct: true },
      { text: "Closure of the tricuspid valve", correct: false },
      { text: "Opening of the tricuspid valve", correct: false },
      { text: "lsovolumetric relaxation of right ventricle", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "When BP is measured by sphygmomanometry, the principle is 'balancing of pressure between the cuff and the brachial artery.' Which is true about the measurement of BP with sphygmomanometer versus intra-arterial pressure measurements?",
    answers: [
      { text: "More than intravascular pressure", correct: true },
      { text: "Less than intravascular pressure", correct: false },
      { text: "Equal to intravascular pressure", correct: false },
      { text: "Depends upon blood flow", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following anatomical structures is not part of the conducting zone?",
    answers: [
      { text: "alveoli", correct: true },
      { text: "pharynx", correct: false },
      { text: "larinx", correct: false },
      { text: "trachea", correct: false },
      { text: "bronchiols", correct: false },
    ],
  },
  {
    question: "Which a section of the lung that receives its own tertiary bronchus is called",
    answers: [
      { text: "bronchopulmonary segment", correct: true },
      { text: "pulmonary lobule", correct: false },
      { text: "interpulmonary segment", correct: false },
      { text: "respiratory segment", correct: false },
      { text: "left lung", correct: false },
    ],
  },
  {
    question: "Smooth muscle cells are found beneath the epithelium and an enveloping connective tissue is likewise interspersed with cartilage that is more predominant in the portions of the conducting airway of greater caliber. Which part of airways has the maximum amount of smooth muscle, in relation to wall thickness:",
    answers: [
      { text: "Terminal bronchioles", correct: true },
      { text: "Bronchi", correct: false },
      { text: "Trachea", correct: false },
      { text: "Respiratory bronchioles", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are measuring with single breath nitrogen method?",
    answers: [
      { text: "Dead space volume", correct: true },
      { text: "Expiratory reserve volume", correct: false },
      { text: "Tidal volume", correct: false },
      { text: "Inspiratory reserve volume", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "N2 washout (or Fowler's method) -A subject takes a breath of 100% o2 and exhales through a one-way valve measuring nitrogen content and volume. A plot of the N2 concentration (as a% of total gas) vs. expired volume is obtained by increasing the N2 concentration from zero to the percentage of N2 in the alveoli. Which of the following is measurement by Fowler's method?",
    answers: [
      { text: "Anatomic dead space", correct: true },
      { text: "Mechanical dead space", correct: false },
      { text: "Alveolar dead space", correct: false },
      { text: "Physiologic dead space", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Lung Compliance is defined as the change in lung volume produced by a unit change in transpulmonary pressure. It is represented by the gradient of the pressure-volume curve. Compliance is greatest during which stage of breathing?",
    answers: [
      { text: "Start of inspiration", correct: true },
      { text: "Start of expiration", correct: false },
      { text: "End of inspiration", correct: false },
      { text: "End of expiration", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Airway resistance is not constant. Airway resistance is markedly affected by changes in the diameter of the airways. Therefore, diseases affecting the respiratory tract can increase airway resistance. Which of the following factors increases the resistance of the airways?",
    answers: [
      { text: "Inhaling cigarette smoke", correct: true },
      { text: "Increased sympathetic stimulation of airway smooth muscle", correct: false },
      { text: "Going to high altitude", correct: false },
      { text: "Increasing lung volume above FRC", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 49-year-old man has a pulmonary embolism that completely blocks blood flow to his left lung. As a result, which of the following will occur?",
    answers: [
      { text: "Alveolar P02 in the left lung will be approximately equal to the P02 in inspired air", correct: true },
      { text: "Systemic arterial P02 will be elevated", correct: false },
      { text: "V/Q ratio in the left lung will be lower than in the right lung", correct: false },
      { text: "Ventilation/perfusion (V/Q) ratio in the left lung will be zero", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Diagnostic spirometry is used to assess a patient's lung function for purposes of comparison with a normal population. or with previous measures from the same patient. Important quantitation of lung function can be gleaned from the displacement of air volume during inspiration and/or expiration. Lung capacities refer to subdivisions that contain two or more volumes. What is the residual volume?",
    answers: [
      { text: "Total lung capacity minus vital capacity", correct: true },
      { text: "Total lung capacity minus residual volume", correct: false },
      { text: "Total lung capacity minus tidal volume", correct: false },
      { text: "Total lung capacity minus functional residual capacity", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The adrenal cortex is derived from mesoderm and begins posteromedial to the urogenital ridge. The adrenal medulla is derived from neural crest cells. These neural crest cells originate from the dorsal aorta. Clusters of chromaffin cells become the distinct medulla after birth. The adrenal gland first appears at 28-30 days post-conception. What is the secret adrenal medulla?",
    answers: [
      { text: "Epinephrine", correct: true },
      { text: "Thyroid stimulating hormones", correct: false },
      { text: "Sex hormones", correct: false },
      { text: "Glucocorticoid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following has not attachment site in steroid hormone receptors?",
    answers: [
      { text: "Prolactin", correct: true },
      { text: "Estrogen", correct: false },
      { text: "Progesterone", correct: false },
      { text: "Testosterone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one of the following acts as a second messenger?",
    answers: [
      { text: "Ca2+", correct: true },
      { text: "Cl-", correct: false },
      { text: "Mg2+", correct: false },
      { text: "P043-", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Glycoprotein hormones (GPHs) are the most complex molecules with hormonal activity. The GPHs exist only in vertebrates and appeared during evolution along with the pituitary. Which of the following is not a glycoprotein hormone?",
    answers: [
      { text: "ACTH", correct: true },
      { text: "FSH", correct: false },
      { text: "LH", correct: false },
      { text: "Prolactin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In an experiment, a rat is infused with a small volume of a calcium chloride solution. Compared to the control condition, which of the following would result from the calcium load?",
    answers: [
      { text: "Increased formation of 24,25· dihydroxycholecalciferoletion", correct: true },
      { text: "Decreased secretion of calcitonin", correct: false },
      { text: "Decreased formation of 24,25· dihydroxycholecalciferol", correct: false },
      { text: "Increased formation of calcitonin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Cortisol has a complex relationship with growth hormone: while chronic hypercortisolism leads to reduced growth hormone and reduced growth, small increases in cortisol stimulate growth hormone secretion and production. Cortisol and GH are most dissimilar in their metabolic effects on which of the following?",
    answers: [
      { text: "Protein synthesis in muscle", correct: true },
      { text: "Glucose uptake in peripheral tissues", correct: false },
      { text: "Utilization of proteins and fats", correct: false },
      { text: "Mobilization of fats", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The release of growth hormone (GH) is primarily controlled by which of the following factors?",
    answers: [
      { text: "Negative feedback from insulin-like growth factors (IGFs)", correct: true },
      { text: "Positive feedback from thyroid hormones", correct: false },
      { text: "Negative feedback from cortisol", correct: false },
      { text: "Direct control by sympathetic nervous system", correct: false },
      { text: "Positive feedback from prolactin", correct: false },
    ],
  },
  {
    question: "The mechanism of action of steroid hormones involves which of the following steps?",
    answers: [
      { text: "Direct interaction with intracellular receptors to affect gene transcription", correct: true },
      { text: "Binding to G-protein coupled receptors on the cell surface", correct: false },
      { text: "Activation of second messengers like cAMP", correct: false },
      { text: "Activation of tyrosine kinase receptors", correct: false },
      { text: "Inhibition of the Na+/K+ pump", correct: false },
    ],
  },
  {
    question: "Which of the following hormones primarily acts by increasing the levels of cyclic AMP (cAMP) in the target cell?",
    answers: [
      { text: "Glucagon", correct: true },
      { text: "Thyroid hormone", correct: false },
      { text: "Oxytocin", correct: false },
      { text: "Testosterone", correct: false },
      { text: "Aldosterone", correct: false },
    ],
  },
  {
    question: "Which of the following structures is responsible for secreting estrogen and progesterone after ovulation?",
    answers: [
      { text: "Corpus luteum", correct: true },
      { text: "Oocyte", correct: false },
      { text: "Graafian follicle", correct: false },
      { text: "Uterus", correct: false },
      { text: "Vagina", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the function of the endometrium?",
    answers: [
      { text: "It houses the fertilized egg and supports fetal development.", correct: true },
      { text: "It protects the ovary from damage.", correct: false },
      { text: "It stimulates the release of eggs from the ovary.", correct: false },
      { text: "It produces estrogen and progesterone.", correct: false },
      { text: "It serves as the site for sperm storage.", correct: false },
    ],
  },
  {
    question: "Which of the following statements best describes the process of oogenesis?",
    answers: [
      { text: "Oogenesis produces a single viable ovum and polar bodies", correct: true },
      { text: "Oogenesis begins after birth and continues until menopause.", correct: false },
      { text: "Oogenesis produces four viable eggs from one primary oocyte.", correct: false },
      { text: "Oogenesis occurs continuously from birth to menopause without interruption.", correct: false },
      { text: "Oogenesis produces sperm cells and eggs alternately.", correct: false },
    ],
  },
  {
    question: "Which of the following is the correct sequence of events in the menstrual cycle?",
    answers: [
      { text: "Follicular phase → Ovulation → Luteal phase → Menstruation", correct: true },
      { text: "Ovulation → Follicular phase → Luteal phase → Menstruation", correct: false },
      { text: "Menstruation → Follicular phase → Ovulation → Luteal phase", correct: false },
      { text: "Luteal phase → Ovulation → Follicular phase → Menstruation", correct: false },
      { text: "Ovulation → Luteal phase → Follicular phase → Menstruation", correct: false },
    ],
  },
  {
    question: "A decrease in sex hormone-binding globulin (SHBG) will have the maximum effect on which of the following?",
    answers: [
      { text: "Progesterone", correct: true },
      { text: "Testosterone", correct: false },
      { text: "Estrogen", correct: false },
      { text: "Prolactin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A woman presents with irregular menstrual cycles, and after testing, she has high levels of estrogen but low levels of progesterone. Which phase of the menstrual cycle is most likely disrupted?",
    answers: [
      { text: "Luteal phase", correct: true },
      { text: "Menstrual phase", correct: false },
      { text: "Follicular phase", correct: false },
      { text: "Ovulatory phase", correct: false },
      { text: "Proliferative phase", correct: false },
    ],
  },
  {
    question: "What causes the shedding of the endometrial lining during menstruation?",
    answers: [
      { text: "A decrease in progesterone levels", correct: true },
      { text: "A surge in estrogen levels", correct: false },
      { text: "A surge in luteinizing hormone (LH)", correct: false },
      { text: "A decrease in follicle-stimulating hormone (FSH)", correct: false },
      { text: "ncreased production of human chorionic gonadotropin (hCG)", correct: false },
    ],
  },
  {
    question: "A woman has irregular menstrual cycles and increased androgen levels. Which hormone is most likely elevated in this condition?",
    answers: [
      { text: "Luteinizing hormone (LH)", correct: true },
      { text: "Estrogen", correct: false },
      { text: "Progesterone", correct: false },
      { text: "Follicle-stimulating hormone (FSH)", correct: false },
      { text: "Prolactin", correct: false },
    ],
  },
  {
    question: "Which of the following hasn’t high BMR range?",
    answers: [
      { text: "Females", correct: true },
      { text: "Athletes", correct: false },
      { text: "New-born", correct: false },
      { text: "Males", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where are maximum bile absorbed?",
    answers: [
      { text: "Ileum", correct: true },
      { text: "Duodenum", correct: false },
      { text: "Jejunum", correct: false },
      { text: "Colon", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is controlled small intestinal peristalsis?",
    answers: [
      { text: "Myenteric plexus", correct: true },
      { text: "Meissner’s plexus", correct: false },
      { text: "Sacral plexus", correct: false },
      { text: "Lumbar plexus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following are not endopeptidases?",
    answers: [
      { text: "Carboxypeptidase", correct: true },
      { text: "Chymotrypsin", correct: false },
      { text: "Elastase", correct: false },
      { text: "Trypsin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following stimulates gastrin secretion by the pyloric antrum?",
    answers: [
      { text: "Peptides and amino acids", correct: true },
      { text: "Glucose", correct: false },
      { text: "Lipids", correct: false },
      { text: "Triglycerides", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Scientists are studying the process of absorption of water in humans. Water is absorbed in the jejunum, ileum, and colon and excreted in the feces. Arrange these in order of the amount of water absorbed or excreted from greatest to smallest:",
    answers: [
      { text: "Colon, ileum, jejunum, feces", correct: true },
      { text: "Feces, colon, ileum, jejunum", correct: false },
      { text: "Jejunum, ileum, colon, feces", correct: false },
      { text: "Colon, jejunum, ileum, feces", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Hyperlipidemia is caused by increased concentrations of plasma lipoproteins. Alterations resulting from genetic defects are classified as primary disorders. Alternatively, other factors that alter lipoprotein metabolisms. Such as diabetes mellitus or hypothyroidism, are classified as secondary disorders. The triad hypercholesterolemia, xanthomatosis, and angina pectoris have been recognized as dominantly inherited syndrome since the work of Muller (1939). Plasma levels of LDL-C are elevated at birth and remain so throughout life. Plasma TG levels are typically normal, and HDL-C levels are normal or reduced. In which of the following are seen maximum endogenous triglycerides?",
    answers: [
      { text: "VLDL", correct: true },
      { text: "Chylomicrons", correct: false },
      { text: "LDL", correct: false },
      { text: "HDL", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following protects the normal pancreas from autodigestion?",
    answers: [
      { text: "Secretion of proenzymese", correct: true },
      { text: "Secretion of protease inhibitors", correct: false },
      { text: "Secretion of bicarbonat", correct: false },
      { text: "Secretion of insulin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the major prostanoid synthesized in kidney?",
    answers: [
      { text: "PGE2", correct: true },
      { text: "PGE1", correct: false },
      { text: "PGl2", correct: false },
      { text: "PGF2a", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following mechanisms does not increased renin secretion?",
    answers: [
      { text: "Increased amount of Na+ in DCT", correct: true },
      { text: "Increased amount of CL- in DCT", correct: false },
      { text: "Decreased amount of K+ in PCT", correct: false },
      { text: "Decreased amount of Ca2+ in PCT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is increased Vasopressin secretion?",
    answers: [
      { text: "Decreased ECF volume", correct: true },
      { text: "Increased ECF volume", correct: false },
      { text: "Decreased ICF volume", correct: false },
      { text: "Increased ICF volume", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a part of filtration barrier in nephrons?",
    answers: [
      { text: "Mesangium", correct: true },
      { text: "Basement membrane", correct: false },
      { text: "Podocytes", correct: false },
      { text: "Endothelial cells", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the major prostanoid synthesized in kidney?",
    answers: [
      { text: "PGE2", correct: true },
      { text: "PGE1", correct: false },
      { text: "PGl2", correct: false },
      { text: "PGF2a", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following mechanisms does not increased renin secretion?",
    answers: [
      { text: "Increased amount of Na+ in DCT", correct: true },
      { text: "Increased amount of CL- in DCT", correct: false },
      { text: "Decreased amount of K+ in PCT", correct: false },
      { text: "Decreased amount of Ca2+ in PCT", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not an effect of Angiotensin II?",
    answers: [
      { text: "Increased diameter of blood vessels", correct: true },
      { text: "Increased of Aldosterone secretion", correct: false },
      { text: "Increased ADH secretion", correct: false },
      { text: "Increased of thirst", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Urine acidification and bicarbonate reabsorption take place in several segments of the nephron: proximal tubule, loop of Henle, distal tubule, and collecting ducts where most acidification occurs ?",
    answers: [
      { text: "Proximal convoluted tubule", correct: true },
      { text: "Distal convoluted tubule", correct: false },
      { text: "Loop of Henle", correct: false },
      { text: "Collecting duct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What are the clinical features of somatic diseases?",
    answers: [
      { text: "Constant anxiety about possible diseases.", correct: true },
      { text: "Increased blood pressure during exercise", correct: false },
      { text: "Increased heart rate during exercise", correct: false },
      { text: "Increased urine output", correct: false },
      { text: "Lowering blood sugar", correct: false },
    ],
  },
  {
    question: "What indicator characterizes the maximum work of the cardiorespiratory system?",
    answers: [
      { text: "maximum oxygen consumption", correct: true },
      { text: "weight and height index", correct: false },
      { text: "end systolic pressure", correct: false },
      { text: "lung capacity", correct: false },
      { text: "stroke volume of the heart", correct: false },
    ],
  },
  {
    question: "What can the stroke volume of the heart reach in athletes with a large size of the trained heart?",
    answers: [
      { text: "200 ml", correct: true },
      { text: "100 ml", correct: false },
      { text: "150 ml", correct: false },
      { text: "70 ml", correct: false },
      { text: "250 ml", correct: false },
    ],
  },
  {
    question: "What is the mechanism by which infection causes fever?",
    answers: [
      { text: "Pyrogens act on hypothalamus", correct: true },
      { text: "Damage of hypothalamus", correct: false },
      { text: "Pyrogens act on hypothalamus", correct: false },
      { text: "Hemorrhage into the hypothalamus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following energy systems are involved in the marathon runners?",
    answers: [
      { text: "Aerobic system", correct: true },
      { text: "Phosphagen system", correct: false },
      { text: "Glycogen-Lactic acid system", correct: false },
      { text: "ATP system", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the training pulse directly related to?",
    answers: [
      { text: "Exercise Intensity", correct: true },
      { text: "Training mode", correct: false },
      { text: "Exercise Intensity", correct: false },
      { text: "Exercise time", correct: false },
      { text: "Exercise quality", correct: false },
    ],
  },
  {
    question: "How does the hydrostatic pressure in the arteries of the head change when moving from a horizontal to a vertical position?",
    answers: [
      { text: "down", correct: true },
      { text: "rises", correct: false },
      { text: "remains constant", correct: false },
      { text: "decreases by more than 70-80 mm Hg.", correct: false },
      { text: "changes significantly upward", correct: false },
    ],
  },
  {
    question: "If a man is 20 years old and his resting heart rate is 60 beats per minute, what would be his expected age-specific maximum heart rate?",
    answers: [
      { text: "200 beats per minute ", correct: true },
      { text: "180 beats per minute", correct: false },
      { text: "160 beats per minute", correct: false },
      { text: "140 beats per minute", correct: false },
      { text: "120 beats per minute", correct: false },
    ],
  },
  {
    question: "Which of the following is an important functional parameter of pain receptors?",
    answers: [
      { text: "Exhibit little or no adaptation", correct: true },
      { text: "Not affected by muscle tension", correct: false },
      { text: "Signal only flexion at joint capsules", correct: false },
      { text: "Can voluntarily be inhibited", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 6-year-old boy was brought to the OPD with craniotabes, rachitic rosary and bowed legs. Diagnosis of rickets was made. Which of the following vitamin D should be measured, to investigate the cause of rickets?",
    answers: [
      { text: "25 hydroxyvitamin D", correct: true },
      { text: "Cholecalciferol", correct: false },
      { text: "1, 25 dihydroxyvitamin D", correct: false },
      { text: "24, 25 dihydroxyvitamin D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which organ is not involved in calcium homeostasis?",
    answers: [
      { text: "Lung", correct: true },
      { text: "Skin", correct: false },
      { text: "Intestine", correct: false },
      { text: "Kidneys", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Glucose transport supplies fuel that is needed for energy metabolism by most mammalian cells. Glucose is a very common metabolic substrate that is used both as a fuel and a signaling molecule. Th~ supply of glucose is especially important for certain cells, such as brain neurons, which have a high metabolic rate supported by an obligate consumption of glucose as fuel in most circumstances. Insulin dependent glucose uptake occurs in?",
    answers: [
      { text: "Muscle", correct: true },
      { text: "Epithelial cells of small intestine", correct: false },
      { text: "Brain", correct: false },
      { text: "Kidney", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of T cell is most effective against viruses?",
    answers: [
      { text: "regulatory T cells", correct: true },
      { text: "Macrophage", correct: false },
      { text: "Helper inducer", correct: false },
      { text: "cytotoxic T cells", correct: false },
      { text: "Infected cells", correct: false },
    ],
  },
  {
    question: "Which of the following is an RNA virus:",
    answers: [
      { text: "Influenza virus", correct: true },
      { text: "Herpes virus", correct: false },
      { text: "Pox virus", correct: false },
      { text: "Corona virus", correct: false },
      { text: "Bird virus", correct: false },
    ],
  },
  {
    question: "Similar to the hair, nails grow continuously throughout our lives. Which of the following is furthest from the nail growth center?",
    answers: [
      { text: "Hyponychium", correct: true },
      { text: "Nail Root", correct: false },
      { text: "Nail Bed", correct: false },
      { text: "Eponychium", correct: false },
      { text: "stratum granulosum", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
