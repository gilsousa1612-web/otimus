import { useState, useMemo } from "react";

const FROTA_REAL = [{"placa":"IYU 9960","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5036"},{"placa":"IYU 9963","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5035"},{"placa":"IYV 3683","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5040"},{"placa":"IYV 3G87","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5039"},{"placa":"IZA5F43","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4229"},{"placa":"IZA5F59","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4230"},{"placa":"IZA7G39","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4232"},{"placa":"IZA7G57","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4231"},{"placa":"IZA8F46","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4228"},{"placa":"IZA8F66","marca":"METALESP","modelo":"SR/METALESP","ano":"2018","tipo":"Semirreboque","chassi":"9A9SRFLA2K1DK4227"},{"placa":"IZF5I42","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5090"},{"placa":"IZF5I44","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5091"},{"placa":"IZG1F63","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5095"},{"placa":"IZG1F79","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5094"},{"placa":"IZG1F64","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5092"},{"placa":"IZG1F85","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5093"},{"placa":"IZG4A39","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5099"},{"placa":"IZG4A34","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5098"},{"placa":"IZM6A28","marca":"FACCHINI","modelo":"SR/FACCHINI 02 EIXOS TRASEIRO","ano":"2018","tipo":"Semirreboque","chassi":"94BM0702JJV058434"},{"placa":"IZM6A37","marca":"FACCHINI","modelo":"SR/FACCHINI 02 EIXOS DIANTEIRO","ano":"2018","tipo":"Semirreboque","chassi":"94BM0942JJV058433"},{"placa":"IZO1B78","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FD442LLDJ5001"},{"placa":"IZO1B67","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FT422LLDJ5002"},{"placa":"IZO1B57","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FD442LLDJ5017"},{"placa":"IZO1B80","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FT422LLDJ5018"},{"placa":"IZO2B59","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FD442LLDJ5005"},{"placa":"IZO2B44","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FT422LLDJ5006"},{"placa":"IZO5I01","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FD442LLDJ5015"},{"placa":"IZO5H38","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FT422LLDJ5016"},{"placa":"IZZ3A39","marca":"RANDON","modelo":"SR/RANDON SR TM FL","ano":"2020","tipo":"Semirreboque","chassi":"9ADT0752LLM458415"},{"placa":"IZZ3A26","marca":"RANDON","modelo":"SR/RANDON SR TM FL","ano":"2020","tipo":"Semirreboque","chassi":"9ADT0752LLM458416"},{"placa":"IZZ6E49","marca":"RANDON","modelo":"SR/RANDON SR TM FL","ano":"2020","tipo":"Semirreboque","chassi":"9ADT0752LLM458078"},{"placa":"IZZ6E18","marca":"RANDON","modelo":"SR/RANDON SR TM FL","ano":"2020","tipo":"Semirreboque","chassi":"9ADT0752LLM458416"},{"placa":"JAN6A13","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2020","tipo":"Semirreboque","chassi":"9A92FD442MLDJ5001"},{"placa":"JAN6A08","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2020","tipo":"Semirreboque","chassi":"9A92FT422MLDJ5002"},{"placa":"JAP0B67","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000002"},{"placa":"JAP0B79","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5144"},{"placa":"JAP1A68","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000003"},{"placa":"JAP1A83","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5145"},{"placa":"JAP4E54","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5146"},{"placa":"JAP4E68","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000004"},{"placa":"JAP5B63","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5154"},{"placa":"JAP5B73","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000012"},{"placa":"JAP9B76","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000006"},{"placa":"JAP9B78","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5148"},{"placa":"JAQ0J58","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5149"},{"placa":"JAQ0J68","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000007"},{"placa":"JAQ3B28","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000008"},{"placa":"JAQ3B33","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5150"},{"placa":"JAQ4D63","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5151"},{"placa":"JAQ4D71","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000009"},{"placa":"JAQ5G32","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5153"},{"placa":"JAQ5G41","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000011"},{"placa":"JAQ6D77","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5158"},{"placa":"JAQ6D83","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000017"},{"placa":"JAQ8J62","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"97T2FD452MR000018"},{"placa":"JAQ8J70","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2021","tipo":"Semirreboque","chassi":"9A93FT422MLDJ5159"},{"placa":"JBA6D48","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7476"},{"placa":"JBA6D58","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7477"},{"placa":"JBA6C66","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7479"},{"placa":"JBA6D99","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7480"},{"placa":"JBA6E03","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7473"},{"placa":"JBA6D89","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7474"},{"placa":"JBA6D97","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7475"},{"placa":"JBA6C83","marca":"MANOS","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2021","tipo":"Semirreboque","chassi":"9A9STT752MVEM7478"},{"placa":"JBD5D09","marca":"FACCHINI","modelo":"SR/FACCHINI 02 EIXOS TRASEIRO","ano":"2021","tipo":"Semirreboque","chassi":"94BM0702MNV086583"},{"placa":"JBD5C99","marca":"FACCHINI","modelo":"SR/FACCHINI 02 EIXOS DIANTEIRO","ano":"2021","tipo":"Semirreboque","chassi":"94BM0922MNV086582"},{"placa":"JCC4G35","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518591_x000"},{"placa":"JCC4G32","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518594"},{"placa":"JCC4G34","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518593"},{"placa":"JCC4G39","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518592"},{"placa":"JCC4H43","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518595"},{"placa":"JCC4H41","marca":"RANDON","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2023","tipo":"Semirreboque","chassi":"9ADT0752PPM518596_x000"},{"placa":"JCV8F69","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089828"},{"placa":"JCV8F46","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089829"},{"placa":"JCV7H67","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089826"},{"placa":"JCV7H86","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089827"},{"placa":"JCW7F34","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089824"},{"placa":"JCW7F51","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089825"},{"placa":"JCW7F07","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089822"},{"placa":"JCW7F13","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089823"},{"placa":"JCX4C43","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089828"},{"placa":"JCX4C26","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089829"},{"placa":"JCX4B33","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR089826"},{"placa":"JCX4B29","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR089827"},{"placa":"JCY6F69","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090049"},{"placa":"JCY6F49","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090050"},{"placa":"JCY6F62","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090047"},{"placa":"JCY6F41","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090048"},{"placa":"JCY6F01","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090045"},{"placa":"JCY6D96","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090046"},{"placa":"JCZ0B89","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090051"},{"placa":"JCZ0D68","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090052"},{"placa":"JCZ0D74","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090053"},{"placa":"JCZ0D78","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090054"},{"placa":"JCZ0D81","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RRR090055"},{"placa":"JCZ0D83","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RRR090056"},{"placa":"JDA4H28","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091680"},{"placa":"JDA4H24","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091681"},{"placa":"JDA4H15","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091678"},{"placa":"JDA4H14","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091679"},{"placa":"JDC0H81","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091683"},{"placa":"JDC0H94","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091684"},{"placa":"JDC0I44","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091682"},{"placa":"JDC0I50","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091685"},{"placa":"JDD1A91","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091688"},{"placa":"JDD1A83","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091689"},{"placa":"JDD1A87","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0912RSR091686"},{"placa":"JDD1A96","marca":"FACCHINI","modelo":"SEMIRREBOQUE TRANSTORAS","ano":"2024","tipo":"Semirreboque","chassi":"94BM0702RSR091687"},{"placa":"IYU 9J42","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FD442KLDJ5037"},{"placa":"IYU 9997","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2018","tipo":"Semirreboque","chassi":"9A93FT422KLDJ5038"},{"placa":"IZP2A65","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FD442LLDJ5011"},{"placa":"IZP2A83","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Semirreboque","chassi":"9A92FT422LLDJ5012"},{"placa":"JDC0B33","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2024","tipo":"Cavalo","chassi":"9BM963414RB379850"},{"placa":"RYQ3I14","marca":"SCANIA","modelo":"R560 A6X4 XT","ano":"2024","tipo":"Cavalo","chassi":"9BSR6X400R4067489"},{"placa":"TQV8E89","marca":"SCANIA","modelo":"R560 A6X4 XT","ano":"2025","tipo":"Cavalo","chassi":"9BSR6X400S4102995"},{"placa":"TQV8E90","marca":"SCANIA","modelo":"R560 A6X4 XT","ano":"2025","tipo":"Cavalo","chassi":"9BSR6X400S4102995"},{"placa":"TQV9A02","marca":"SCANIA","modelo":"R560 A6X4 XT","ano":"2025","tipo":"Cavalo","chassi":"9BSR6X400S4102995"},{"placa":"QSN5F82","marca":"MERCEDES","modelo":"ACTROS 2653S","ano":"2023","tipo":"Cavalo","chassi":"9BM963414PB340905"},{"placa":"SHF1G85","marca":"MERCEDES","modelo":"AXOR 2644LS","ano":"2022","tipo":"Cavalo","chassi":"9BM958454NB297739"},{"placa":"SHI1A37","marca":"MERCEDES","modelo":"AXOR 2644LS","ano":"2022","tipo":"Cavalo","chassi":"9BM958454NB304073"},{"placa":"JDB5A25","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB380191"},{"placa":"JDB5A35","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379426"},{"placa":"JDB5A23","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379893"},{"placa":"RTI2A73","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2021","tipo":"Cavalo","chassi":"9BM963414NB247832"},{"placa":"JDC3C91","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB380254"},{"placa":"JDC8C93","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379475"},{"placa":"JDC0C28","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379946"},{"placa":"JCH1D23","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2023","tipo":"Cavalo","chassi":"9BM963414PB326258"},{"placa":"JCH8F95","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2023","tipo":"Cavalo","chassi":"9BM963414PB318792"},{"placa":"JCE9A21","marca":"MERCEDES","modelo":"AROCS 3351S","ano":"2023","tipo":"Cavalo","chassi":"9BM964416PB334355"},{"placa":"JDB7C04","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379696"},{"placa":"JDB7B94","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB379737"},{"placa":"JDC3A67","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2025","tipo":"Cavalo","chassi":"9BM963414RB380291"},{"placa":"RTZ3H09","marca":"MERCEDES","modelo":"ACTROS 2651S","ano":"2021","tipo":"Cavalo","chassi":"9BM963414NB255488"},{"placa":"SAK5B13","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5B17","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5E97","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D17","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D18","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D19","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3I78","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK2C95","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3I71","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3C41","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK1H95","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3C43","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F04","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F00","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5B19","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F12","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F13","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F11","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D26","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D28","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK4D30","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3H15","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3H16","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3H17","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3H13","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3H14","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3I64","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3C50","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3C48","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK1H96","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F02","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5E95","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F01","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F28","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F29","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F31","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F40","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F41","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK5F43","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK7H74","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK7H43","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK7H72","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK1H94","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK2A42","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SAK3C42","marca":"METALESP","modelo":"FLORESTAL 2E","ano":"2022","tipo":"Carreta","chassi":""},{"placa":"SCA-0006","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002482"},{"placa":"SCA-0001","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002483"},{"placa":"SCA-0002","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002484"},{"placa":"SCA-0003","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002485"},{"placa":"SCA-0004","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002486"},{"placa":"SCA-0005","marca":"FACCHINI","modelo":"FACCHINI/TRANSTORAS","ano":"2026","tipo":"Carreta","chassi":"94BM0852TTV002487"},{"placa":"JCX9G36","marca":"DAF","modelo":"XT530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB148505"},{"placa":"JCQ5F35","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318339"},{"placa":"JCQ5C36","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB317345"},{"placa":"JCQ5F33","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318285"},{"placa":"JCV4A05","marca":"SCANIA","modelo":"R540 PLUS","ano":"2024","tipo":"Cavalo","chassi":"9BSR6X400R4069431"},{"placa":"JCV4A08","marca":"SCANIA","modelo":"R540 PLUS","ano":"2024","tipo":"Cavalo","chassi":"9BSR6X400R4069434"},{"placa":"JDD8B56","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D9RE610927"},{"placa":"JCX7D58","marca":"DAF","modelo":"XT530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB149287"},{"placa":"JCX9G52","marca":"DAF","modelo":"XT530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB149290"},{"placa":"JDD8B39","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D8RE610923"},{"placa":"JCG8J47","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D8RE942947"},{"placa":"JCX7D92","marca":"DAF","modelo":"XT530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB148511"},{"placa":"JCK0H48","marca":"VOLVO","modelo":"FH540","ano":"2023","tipo":"Cavalo","chassi":"9BVRT60DXRE945894"},{"placa":"JDC4B17","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D6RE609115"},{"placa":"JDD8B48","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D0RE610919"},{"placa":"JCQ3F38","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB317184"},{"placa":"JDD8B19","marca":"VOLVO","modelo":"FH540","ano":"2024","tipo":"Cavalo","chassi":"9BVRT60D5RE610917"},{"placa":"JCX7E02","marca":"DAF","modelo":"XT530","ano":"2023","tipo":"Cavalo","chassi":"98PTTH430RB148270"},{"placa":"JCG8J54","marca":"VOLVO","modelo":"FH540","ano":"2023","tipo":"Cavalo","chassi":"9BVRT60D6RE942955"},{"placa":"JCQ5C44","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318360"},{"placa":"JCK1D55","marca":"VOLVO","modelo":"FH540","ano":"2023","tipo":"Cavalo","chassi":"9BVRT60D7RE945825"},{"placa":"JCQ3F34","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318364"},{"placa":"JCQ3F29","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318420"},{"placa":"JCQ3F32","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318397"},{"placa":"RUB0H55","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2021","tipo":"Cavalo","chassi":"9BM963414NB252019"},{"placa":"JCQ3F42","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB317885"},{"placa":"RVG1I96","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2021","tipo":"Cavalo","chassi":"9BM963414NB295115"},{"placa":"RUB0H54","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2021","tipo":"Cavalo","chassi":"9BM963414NB251892"},{"placa":"JCV4A10","marca":"SCANIA","modelo":"R540 PLUS","ano":"2024","tipo":"Cavalo","chassi":"9BSR6X400R4069422"},{"placa":"JCQ3F35","marca":"MERCEDES","modelo":"ACTROS 2651LS","ano":"2023","tipo":"Cavalo","chassi":"9BM963424PB318630"},{"placa":"UFJ1H64","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557406"},{"placa":"UFZ1D97","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557407"},{"placa":"TKF3F84","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM558111"},{"placa":"UER9E58","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM558112"},{"placa":"TLK2I43","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM558216"},{"placa":"UDV4E07","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM558215"},{"placa":"UFT4H63","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557408"},{"placa":"UFB9A26","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557409"},{"placa":"UEL8F86","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557728"},{"placa":"QSU5E55","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557727"},{"placa":"QSR0E26","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557723"},{"placa":"QSV8B74","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557724"},{"placa":"UDM9G38","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM558211"},{"placa":"UDU5F35","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM558212"},{"placa":"UDY1F98","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM558205"},{"placa":"UER5A04","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM558206"},{"placa":"QSX1I48","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557498"},{"placa":"UDH0A64","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557499"},{"placa":"TKM5J93","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1123TTM557168"},{"placa":"QSZ4C25","marca":"RANDON","modelo":"RANDON/TQ PP","ano":"2026","tipo":"Tanque Rodo","chassi":"9ADY1183TTM557167"},{"placa":"STC4F15","marca":"METANOX","modelo":"SR/METANOX TQ AP PP 4E","ano":"2026","tipo":"Tanque","chassi":"982MSTP4EVE000842"},{"placa":"UFJ1H65","marca":"METANOX","modelo":"SR/METANOX TQ AP PP 4E","ano":"2026","tipo":"Tanque","chassi":"982MSTP4EVE000843"},{"placa":"QSP7C57","marca":"METANOX","modelo":"SR/METANOX TQ AP PP 4E","ano":"2026","tipo":"Tanque","chassi":"982MSTP4EVE000852"},{"placa":"UEQ0B87","marca":"METANOX","modelo":"SR/METANOX TQ AP PP 4E","ano":"2026","tipo":"Tanque","chassi":"982MSTP4EVE000853"},{"placa":"UEX6C48","marca":"METANOX","modelo":"SR/METANOX TQ AP PP 4E","ano":"2026","tipo":"Tanque","chassi":"982MSTP4EVE000854"},{"placa":"JAQ6I47","marca":"MERCEDES","modelo":"AXOR 2536 6X2","ano":"2021","tipo":"Cavalo","chassi":"9BM958441MB214116"},{"placa":"IZI8E47","marca":"MERCEDES","modelo":"AXOR 2536 6X2","ano":"2019","tipo":"Cavalo","chassi":"9BM9558441KB138696"},{"placa":"IZI8E40","marca":"MERCEDES","modelo":"AXOR 2536 6X2","ano":"2019","tipo":"Cavalo","chassi":"9BM958441KB135378"},{"placa":"IZI8E32","marca":"MERCEDES","modelo":"AXOR 2536 6X2","ano":"2019","tipo":"Cavalo","chassi":"9BM958441KB139551"},{"placa":"JAZ4C00","marca":"MERCEDES","modelo":"AXOR 2536 6X2","ano":"2021","tipo":"Cavalo","chassi":"9BM958441NB240983"},{"placa":"UFD8D48","marca":"FACCHINI","modelo":"SR/FACCHINI SRF PC","ano":"2025","tipo":"Carreta","chassi":"94BJ1243STV004872"},{"placa":"UGE1B56","marca":"FACCHINI","modelo":"SR/FACCHINI SRF PC","ano":"2026","tipo":"Carreta","chassi":"94BJ1243TTV000882"},{"placa":"UGP0C18","marca":"FACCHINI","modelo":"SR/FACCHINI SRF PC","ano":"2026","tipo":"Carreta","chassi":"94BJ1243TTV000870"},{"placa":"QSX3J31","marca":"LIBRELATO","modelo":"SR/LIBRELATO PC","ano":"2026","tipo":"Carreta","chassi":"9A9CC2573T2DJ5196"},{"placa":"TKZ6J32","marca":"LIBRELATO","modelo":"SR/LIBRELATO PC","ano":"2026","tipo":"Carreta","chassi":"9A9CC2573T2DJ5212"},{"placa":"SHE1E75","marca":"MERCEDES","modelo":"AXOR 2644 LS 6X4","ano":"2022","tipo":"Cavalo","chassi":"9BM958454NB288120"},{"placa":"SHE9H26","marca":"MERCEDES","modelo":"AXOR 2644 LS 6X4","ano":"2022","tipo":"Cavalo","chassi":"9BM958454NB296850"},{"placa":"SHE9H28","marca":"MERCEDES","modelo":"AXOR 2644 LS 6X4","ano":"2022","tipo":"Cavalo","chassi":"9BM958454NB297837"},{"placa":"IZG4A46","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A93FD442KLDJ5096"},{"placa":"IZG4A48","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A93FT422KLDJ5097"},{"placa":"IZO1J08","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A92FD442LLDJ5003"},{"placa":"IZO1J14","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A92FT422LLDJ5004"},{"placa":"IZO3C14","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A92FD442LLDJ5009"},{"placa":"IZO3C17","marca":"LIBRELATO","modelo":"SR/LIBRELATO TTFLCTOR 2E","ano":"2019","tipo":"Carreta","chassi":"9A92FT422LLDJ5010"},{"placa":"IUW7I79","marca":"VOLVO","modelo":"FH 460 6X2","ano":"2013","tipo":"Cavalo","chassi":"9BVAG20C2EE810110"},{"placa":"ITQ5D99","marca":"VOLVO","modelo":"FH 420 6X2","ano":"2012","tipo":"Cavalo","chassi":"9BVAG10C1CE785956"},{"placa":"ISE5J56","marca":"VOLVO","modelo":"FH 440 6X2","ano":"2011","tipo":"Cavalo","chassi":"9BVAS02C3BE776676"},{"placa":"UDY1I71","marca":"TRUCKVAN","modelo":"SR/TRUCKVAN CFE 4E","ano":"2026","tipo":"Carreta","chassi":"97V107154TG008742"},{"placa":"UFJ6G31","marca":"RODOVALE","modelo":"SR/RDVL CA 4E PM B","ano":"2026","tipo":"Carreta","chassi":"9A9RSA4MBTLDV2420"},{"placa":"GKD8H52","marca":"RODOVALE","modelo":"SR/RDVL CA 4E PM B","ano":"2026","tipo":"Carreta","chassi":"9A9RSA4MBTLDV2422"},{"placa":"FQJ-1810","marca":"SCANIA","modelo":"G-440 A 8X2 (NA) 3-Eixos (EURO 5) Dies. 2p","ano":"2014","tipo":"Cavalo","chassi":"9BSG6X200E3857461"},{"placa":"IZL-9H98","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSKB107638"},{"placa":"IZT-7G08","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB108498"},{"placa":"IZT-7F77","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB108999"},{"placa":"IZU-4A89","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB108063"},{"placa":"IZW-8E24","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB110318"},{"placa":"IZV-7E86","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB109715"},{"placa":"IZW-2G89","marca":"DAF","modelo":"XF 105 FTT 510 6X4 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTT47MSLB108451"},{"placa":"IZV-7E99","marca":"DAF","modelo":"XF 105 FTS 460 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"98PTS47MSLB109714"},{"placa":"IYZ-7I33","marca":"IVECO-FIAT","modelo":"STRALIS HI-WAY 600-S44T  8X2 (EURO 5) Dies. 2p","ano":"2018","tipo":"Cavalo","chassi":"93ZM2SSH0K8831230"},{"placa":"IYZ-6F00","marca":"IVECO-FIAT","modelo":"STRALIS HI-WAY 600-S44T  6X2 (EURO 5) Dies. 2p","ano":"2018","tipo":"Cavalo","chassi":"93ZM2SSH0K8831235"},{"placa":"IZD-2H95","marca":"IVECO-FIAT","modelo":"STRALIS HI-WAY 600-S44T 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"93ZM2SSH0K8831622"},{"placa":"IZD-2H89","marca":"IVECO-FIAT","modelo":"STRALIS HI-WAY 600-S44T 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"93ZM2SSH0K8831665"},{"placa":"IZG-9J67","marca":"IVECO-FIAT","modelo":"STRALIS HI-WAY 600-S44T 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"93ZM2SSH0K8832102"},{"placa":"IZC-4J93","marca":"M.BENZ","modelo":"ACTROS 2651 S 6X4 (EURO 5) Dies. 2p","ano":"2018","tipo":"Cavalo","chassi":"9BM938142KS048408"},{"placa":"IZL-1G24","marca":"MAN","modelo":"TGX 28440 6X2T","ano":"2019","tipo":"Cavalo","chassi":"95388XZZ5KE901663"},{"placa":"IZL-1B81","marca":"MAN","modelo":"TGX 28440 6X2T","ano":"2019","tipo":"Cavalo","chassi":"95388XZZ5KE901713"},{"placa":"JAB-4J35","marca":"MAN","modelo":"TGX 28440 6X2T","ano":"2019","tipo":"Cavalo","chassi":"95388XZZ1LE000887"},{"placa":"DYH-3J09","marca":"MAN","modelo":"TGX 29480 6X4T","ano":"2019","tipo":"Cavalo","chassi":"9532AXAZ0KE901558"},{"placa":"RFI-9E22","marca":"M.BENZ","modelo":"ACTROS 2651 S 6X4 (EURO 5) Dies. 2p","ano":"2019","tipo":"Cavalo","chassi":"9BM938142LS054158"},{"placa":"IZF-4H36","marca":"VOLVO","modelo":"FH 460 GLOBETROTTER 6X2 (EURO 5) DIES. 2P","ano":"2019","tipo":"Cavalo","chassi":"9BVRG20A6LE866634"},{"placa":"JBK-3E83","marca":"VOLKSWAGEN","modelo":"METEOR 29.520 6X4","ano":"2022","tipo":"Cavalo","chassi":"9539B8TJ5PR201544"},{"placa":"JBK-3E84","marca":"VOLKSWAGEN","modelo":"METEOR 29.520 6X4","ano":"2022","tipo":"Cavalo","chassi":"9539B8TJ5PR201415"},{"placa":"JBK-3E86","marca":"VOLKSWAGEN","modelo":"METEOR 29.520 6X4","ano":"2022","tipo":"Cavalo","chassi":"9539B8TJ6PR201455"},{"placa":"JBK-3E87","marca":"VOLKSWAGEN","modelo":"METEOR 29.520 6X4","ano":"2022","tipo":"Cavalo","chassi":"9539B8TJ8PR201537"},{"placa":"JBK-3E88","marca":"VOLKSWAGEN","modelo":"METEOR 29.520 6X4","ano":"2022","tipo":"Cavalo","chassi":"9539B8TJ3PR201476"},{"placa":"JCC7C31","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ3PR204684"},{"placa":"JCC7C32","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ5PR204315"},{"placa":"JCC7C33","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ0PR204268"},{"placa":"JCC7C34","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ2PR204210"},{"placa":"JCC7C35","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ7PR204171"},{"placa":"JCD0A57","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2023","tipo":"Cavalo","chassi":"9539K8TJ8PR204230"},{"placa":"JCO5F63","marca":"VOLKSWAGEN","modelo":"VW/29.530 MTM 6X4","ano":"2024","tipo":"Cavalo","chassi":"9539K8TJ8SR200364"},{"placa":"JCT2F14","marca":"IVECO-FIAT","modelo":"IVECO/S-WAY 540-6X4","ano":"2024","tipo":"Cavalo","chassi":"93ZS62TVZR8602664"},{"placa":"JCT2F15","marca":"IVECO-FIAT","modelo":"IVECO/S-WAY 540-6X4","ano":"2024","tipo":"Cavalo","chassi":"93ZS62TVZR8602374"},{"placa":"JCW6G19","marca":"DAF","modelo":"DAF/XF FTT 530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB148509"},{"placa":"JCW6G32","marca":"DAF","modelo":"DAF/XF FTT 530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB148510"},{"placa":"JCW6G37","marca":"DAF","modelo":"DAF/XF FTT 530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB147950"},{"placa":"JCW6I60","marca":"DAF","modelo":"DAF/XF FTT 530","ano":"2024","tipo":"Cavalo","chassi":"98PTTH430RB148269"},{"placa":"PRJ-6J83","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2017","tipo":"Tanque","chassi":"9ADV1123HHM409630"},{"placa":"PRJ-7A33","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2017","tipo":"Tanque","chassi":"9ADV1183HHM409631"},{"placa":"PZI-2A01","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2017","tipo":"Tanque","chassi":"9ADV1123HHM409319"},{"placa":"PZI-2A02","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2017","tipo":"Tanque","chassi":"9ADV1183HHM409320"},{"placa":"IYP-6467","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2018","tipo":"Tanque","chassi":"9A9SRTPA3J1DK4746"},{"placa":"IYP-9895","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A9SRTPD3J1DK4750"},{"placa":"IYQ-3999","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A98RTPD3J1DK4749"},{"placa":"IYQ-7411","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A9SRTPD3J1DK4751"},{"placa":"IYQ-4074","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2018","tipo":"Tanque","chassi":"9A98RTPA3J1DK4748"},{"placa":"IYP-6486","marca":"SR/METALES MAXI","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2018","tipo":"Tanque","chassi":"9A98RTPA3J1DK4747"},{"placa":"IWO-2J76","marca":"SR/NOMA TANQUE","modelo":"TANQUE INOX VANDERLEIA 03 Eixos (C/Pneus) (SEMI-REBOQUE","ano":"2015","tipo":"Tanque","chassi":"9EP211430F1002918"},{"placa":"IZD-3F32","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2019","tipo":"Tanque","chassi":"9A9RST3EAKBDR8016"},{"placa":"IZD-9D20","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2019","tipo":"Tanque","chassi":"9A9RST3B1KBDR8012"},{"placa":"IZD-9D27","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2019","tipo":"Tanque","chassi":"9A9RSTA3EKBDR8024"},{"placa":"IZG-4A61","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2019","tipo":"Tanque","chassi":"9A9RST3EAKBDR8021"},{"placa":"IZG-9E97","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2019","tipo":"Tanque","chassi":"9A9RST3EAKBDR8022"},{"placa":"IXZ-9107","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2018","tipo":"Tanque","chassi":"9A9RSTA3EJBDR8001"},{"placa":"IYE-5733","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A9RST3EAJBDR8006"},{"placa":"IYF-6455","marca":"SR/RODOTECNICA TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A9RST3EAJBDR8007"},{"placa":"IYI-5978","marca":"SR/GOTTI TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A91P4230JCAD9062"},{"placa":"IYI-6298","marca":"SR/GOTTI TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2018","tipo":"Tanque","chassi":"9A91P4230JCAD9063"},{"placa":"IWP-0103","marca":"SR/TANKSPAR TANQUE","modelo":"TANQUE INOX VANDERLEIA 03 Eixos (C/Pneus) (SEMI-REBOQUE","ano":"2015","tipo":"Tanque","chassi":"9A9SRT38DFCEG8461"},{"placa":"IVM-0E77","marca":"SR/LIESS TANQUE","modelo":"TANQUE INOX VANDERLEIA 03 Eixos (C/Pneus) (SEMI-REBOQUE","ano":"2014","tipo":"Tanque","chassi":"9A9V13730E1AU3094"},{"placa":"IUY-9356","marca":"SR/LIESS TANQUE","modelo":"TANQUE INOX VANDERLEIA 03 Eixos (C/Pneus) (SEMI-REBOQUE","ano":"2014","tipo":"Tanque","chassi":"9A9V13730E1AU3036"},{"placa":"IZU-4C93","marca":"SR/RHODOSS TANQUE","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2020","tipo":"Tanque","chassi":"9A953L46PLEEE1042"},{"placa":"IZW-2H53","marca":"CARRETA RODOTECNICA","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2020","tipo":"Tanque","chassi":"9A9TAPP3ELBDR8134"},{"placa":"IZW-2H09","marca":"CARRETA RODOTECNICA","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2020","tipo":"Tanque","chassi":"9A9TAPP3ELBDR8133"},{"placa":"IZW-2H18","marca":"CARRETA RODOTECNICA /BI-TREM","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2020","tipo":"Tanque","chassi":"9A9TAPP3ELBDR8131"},{"placa":"IZV-5C34","marca":"CARRETA RHODOSS","modelo":"TANQUE CARGA MISTA VANDERLEIA 03 Eixos(C/Pneus)(SEMI-RE","ano":"2020","tipo":"Tanque","chassi":"9A983L46PLEEE1048"},{"placa":"IZW-2H45","marca":"CARRETA RODOTECNICA /BI-TREM","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2020","tipo":"Tanque","chassi":"9A9TAPP3ELBDR8132"},{"placa":"JBK-1H68","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1123NNM497402"},{"placa":"JBK-1H66","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1183NNM497403"},{"placa":"JBK-1C94","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1123NNM497406"},{"placa":"JBK-1C87","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1183NNM497407"},{"placa":"JBK-1C47","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1123NNM497022"},{"placa":"JBK-1C53","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1183NNM497023"},{"placa":"JBK-1C20","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1123NNM497404"},{"placa":"JBK-1C23","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1183NNM497405"},{"placa":"JBK-1C73","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1123NNM497014"},{"placa":"JBK-1C81","marca":"SR/RANDON SR TQ","modelo":"TANQUE CARGA MISTA 03 Eixos (C/Pneus) (SEMI-REBOQUE)","ano":"2022","tipo":"Tanque","chassi":"9ADY1183NNM497015"},{"placa":"JCC7C15","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076926"},{"placa":"JCC7C16","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076927"},{"placa":"JCC7C18","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076918"},{"placa":"JCC7C19","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076917"},{"placa":"JCC7C20","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076916"},{"placa":"JCC7C21","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076921"},{"placa":"JCC7C22","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076922"},{"placa":"JCC7C23","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076923"},{"placa":"JCC7C24","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076925"},{"placa":"JCC7C25","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076920"},{"placa":"JCC7C26","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1083PPR076924"},{"placa":"JCC7C29","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1153PPR076919"},{"placa":"JCG6J58","marca":"FACCHINI","modelo":"SR/FACCHINI SRF 4CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1364PRR079002"},{"placa":"JCG6J59","marca":"FACCHINI","modelo":"SR/FACCHINI SRF 4CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1364PRR079003"},{"placa":"JCH7G19","marca":"FACCHINI","modelo":"SR/FACCHINI SRF 4CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1364PRR080229"},{"placa":"JCH7G21","marca":"FACCHINI","modelo":"SR/FACCHINI SRF 4CLTP","ano":"2023","tipo":"Tanque","chassi":"94BT1364PRR080230"},{"placa":"JCW6E41","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089586"},{"placa":"JCW6E50","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089589"},{"placa":"JCW6E54","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089845"},{"placa":"JCW6E59","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089585"},{"placa":"JCW6G58","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089590"},{"placa":"JCW6G74","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089844"},{"placa":"JCX4D89","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089583"},{"placa":"JCX4D90","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089584"},{"placa":"JCX4E98","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089847"},{"placa":"JCX4F00","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089846"},{"placa":"JCX5G12","marca":"FACCHINI","modelo":"SR/FACCHINI SRF QRCLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1083RRR089587"},{"placa":"JCX5G32","marca":"FACCHINI","modelo":"SR/FACCHINI SRF CLTP","ano":"2024","tipo":"Tanque","chassi":"94BT1153RRR089588"},{"placa":"IGR-1A85","marca":"FORD","modelo":"F-1000 XL TURBO 2.5 HSD DIES. 2P","ano":"1997","tipo":"Tanque","chassi":"9BFE2UEH2VDB47502"},{"placa":"FRH7J15","marca":"GM","modelo":"MONTANA T","ano":"2022","tipo":"Tanque","chassi":"9BGEA43BOPB202001"},{"placa":"ITV-9G59","marca":"GM","modelo":"CELTA 1.0L LT","ano":"2012","tipo":"Tanque","chassi":"9BGRP48F0CG376736"}];

const EQUIPE = [
  { id:"1", nome:"Gilmar", funcao:"Mecânico" },
  { id:"2", nome:"Muller", funcao:"Mecânico" },
  { id:"3", nome:"Everson", funcao:"Soldador" },
  { id:"4", nome:"Edinei", funcao:"Soldador" },
  { id:"5", nome:"Carlos Vaz", funcao:"Eletricista" },
  { id:"6", nome:"Josue", funcao:"Mecânico" },
  { id:"7", nome:"Luiz", funcao:"Lubrificador" },
  { id:"8", nome:"Osvaldino", funcao:"Lavador" },
];

const TIPO_ICONE = { Cavalo:"🚛", Carreta:"🚃", Semirreboque:"🔗", Tanque:"🛢️", "Tanque Rodo":"🛢️" };
const TIPO_COR   = { Cavalo:"#3b82f6", Carreta:"#8b5cf6", Semirreboque:"#06b6d4", Tanque:"#f97316", "Tanque Rodo":"#f59e0b" };
const MARCA_COR  = {
  MERCEDES:"#c0392b", VOLVO:"#27ae60", DAF:"#2980b9", SCANIA:"#e74c3c",
  VOLKSWAGEN:"#1abc9c", "IVECO-FIAT":"#e67e22", MAN:"#9b59b6",
  FACCHINI:"#f0a500", LIBRELATO:"#16a085", METALESP:"#2c3e50",
  RANDON:"#7f8c8d", MANOS:"#d35400",
};
const FUNCAO_COR = { "Mecânico":"#3b82f6","Soldador":"#f59e0b","Eletricista":"#8b5cf6","Lubrificador":"#10b981","Lavador":"#06b6d4" };

const TIPO_OS_ICONE = { Preventiva:"🔧", Corretiva:"🔴", Lavagem:"💧", Lubrificação:"🟡" };

const MOCK_OS = [
  { id:1, placa:"JDD8B56", tipo:"Preventiva", status:"Aberta", mecanico:"Gilmar", km:145000, valor_pecas:1200, valor_mo:400, data:"2026-05-20", local:"Interna" },
  { id:2, placa:"JCQ5F35", tipo:"Corretiva", status:"Fechada", mecanico:"Muller", km:210000, valor_pecas:3800, valor_mo:800, data:"2026-05-18", local:"Externa" },
  { id:3, placa:"IZD-3F32", tipo:"Lubrificação", status:"Aberta", mecanico:"Luiz", km:98000, valor_pecas:320, valor_mo:150, data:"2026-05-22", local:"Interna" },
  { id:4, placa:"JBK-1H68", tipo:"Lavagem", status:"Fechada", mecanico:"Osvaldino", km:320000, valor_pecas:0, valor_mo:80, data:"2026-05-21", local:"Interna" },
  { id:5, placa:"SAK5B13", tipo:"Corretiva", status:"Aberta", mecanico:"Carlos Vaz", km:67000, valor_pecas:5600, valor_mo:1200, data:"2026-05-23", local:"Externa" },
  { id:6, placa:"UFJ1H64", tipo:"Preventiva", status:"Aberta", mecanico:"Everson", km:145200, valor_pecas:900, valor_mo:300, data:"2026-05-24", local:"Interna" },
];

export default function Dashboard() {
  const [tab, setTab] = useState("overview");
  const [search, setSearch] = useState("");
  const [tipoFilter, setTipoFilter] = useState("Todos");
  const [marcaFilter, setMarcaFilter] = useState("Todas");
  const [anoFilter, setAnoFilter] = useState("Todos");
  const [osList, setOsList] = useState(MOCK_OS);
  const [osStatus, setOsStatus] = useState("Todas");
  const [showModal, setShowModal] = useState(false);
  const [novaOS, setNovaOS] = useState({ placa:"", tipo:"Preventiva", mecanico:"", local:"Interna", km:"", valor_pecas:"", valor_mo:"", rc:"" });
  const [page, setPage] = useState(0);
  const PER_PAGE = 30;

  const tipos = useMemo(() => ["Todos", ...Array.from(new Set(FROTA_REAL.map(v=>v.tipo))).sort()], []);
  const marcas = useMemo(() => ["Todas", ...Array.from(new Set(FROTA_REAL.map(v=>v.marca))).sort()], []);
  const anos = useMemo(() => ["Todos", ...Array.from(new Set(FROTA_REAL.map(v=>v.ano))).filter(Boolean).sort()], []);

  const frotaFiltrada = useMemo(() => {
    return FROTA_REAL.filter(v => {
      const q = search.toLowerCase();
      const matchSearch = !q || v.placa.toLowerCase().includes(q) || v.marca.toLowerCase().includes(q) || v.modelo.toLowerCase().includes(q);
      const matchTipo = tipoFilter === "Todos" || v.tipo === tipoFilter;
      const matchMarca = marcaFilter === "Todas" || v.marca === marcaFilter;
      const matchAno = anoFilter === "Todos" || v.ano === anoFilter;
      return matchSearch && matchTipo && matchMarca && matchAno;
    });
  }, [search, tipoFilter, marcaFilter, anoFilter]);

  const frotaPaginada = frotaFiltrada.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const totalPages = Math.ceil(frotaFiltrada.length / PER_PAGE);

  const osFiltradas = osList.filter(o => osStatus === "Todas" || o.status === osStatus);
  const osAbertas = osList.filter(o=>o.status==="Aberta").length;

  const contTipo = useMemo(() => {
    const r = {};
    FROTA_REAL.forEach(v => { r[v.tipo] = (r[v.tipo]||0)+1; });
    return r;
  }, []);
  const contMarca = useMemo(() => {
    const r = {};
    FROTA_REAL.forEach(v => { r[v.marca] = (r[v.marca]||0)+1; });
    return Object.entries(r).sort((a,b)=>b[1]-a[1]).slice(0,8);
  }, []);

  function criarOS() {
    if (!novaOS.placa || !novaOS.mecanico) return;
    setOsList([{ id: osList.length+1, placa:novaOS.placa, tipo:novaOS.tipo, status:"Aberta", mecanico:novaOS.mecanico, km:parseInt(novaOS.km)||0, valor_pecas:parseFloat(novaOS.valor_pecas)||0, valor_mo:parseFloat(novaOS.valor_mo)||0, data:new Date().toISOString().split("T")[0], local:novaOS.local }, ...osList]);
    setShowModal(false);
    setNovaOS({ placa:"", tipo:"Preventiva", mecanico:"", local:"Interna", km:"", valor_pecas:"", valor_mo:"", rc:"" });
  }

  return (
    <div style={{ fontFamily:"'IBM Plex Mono',monospace", background:"#080a0e", minHeight:"100vh", color:"#e2e8f0" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Syne:wght@700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px;height:3px}
        ::-webkit-scrollbar-thumb{background:#2d3748;border-radius:2px}
        .tab{background:none;border:none;cursor:pointer;padding:10px 18px;font-family:inherit;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#4a5568;border-bottom:2px solid transparent;transition:all .2s}
        .tab:hover{color:#f0a500}
        .tab.on{color:#f0a500;border-bottom:2px solid #f0a500}
        .card{background:#0f1219;border:1px solid #1a2030;border-radius:8px;padding:20px}
        .input{background:#0a0c12;border:1px solid #252d3d;color:#e2e8f0;padding:9px 13px;border-radius:6px;font-family:inherit;font-size:12px;width:100%}
        .input:focus{outline:none;border-color:#f0a500}
        select.input option{background:#0f1219}
        .btn{background:#f0a500;color:#080a0e;border:none;padding:9px 18px;border-radius:6px;font-family:inherit;font-size:11px;font-weight:700;letter-spacing:1px;cursor:pointer;text-transform:uppercase;transition:all .2s}
        .btn:hover{background:#ffc107;transform:translateY(-1px)}
        .btn-g{background:none;border:1px solid #252d3d;color:#718096;padding:6px 14px;border-radius:5px;font-family:inherit;font-size:11px;cursor:pointer;transition:all .2s}
        .btn-g:hover,.btn-g.on{border-color:#f0a500;color:#f0a500}
        .badge-a{background:#0d2018;color:#4ade80;border:1px solid #14532d;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700;letter-spacing:.5px}
        .badge-f{background:#141821;color:#718096;border:1px solid #252d3d;padding:2px 8px;border-radius:12px;font-size:10px;font-weight:700}
        .tr{display:grid;gap:8px;padding:10px 16px;border-bottom:1px solid #13161e;font-size:11px;align-items:center;transition:background .15s}
        .tr:hover{background:#0d1018}
        .th{display:grid;gap:8px;padding:8px 16px;background:#0a0c12;border-bottom:1px solid #1a2030;font-size:9px;color:#4a5568;letter-spacing:1.5px;text-transform:uppercase;align-items:center}
        .modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.75);display:flex;align-items:center;justify-content:center;z-index:100;backdrop-filter:blur(4px)}
        .modal{background:#0f1219;border:1px solid #252d3d;border-radius:12px;padding:28px;width:520px;max-height:90vh;overflow-y:auto}
        .g2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
        .label{font-size:9px;color:#4a5568;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}
        .kpi{background:#0f1219;border:1px solid #1a2030;border-radius:8px;padding:20px 22px;position:relative;overflow:hidden}
        .kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--c,#f0a500)}
        .chip{display:inline-block;padding:2px 8px;border-radius:4px;font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border:1px solid}
      `}</style>

      {/* Header */}
      <div style={{background:"#0a0c12",borderBottom:"1px solid #1a2030",padding:"0 28px"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:58}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            {/* Otimus logo — two slanted bars */}
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
              <rect width="38" height="38" rx="8" fill="#1b3040"/>
              <polygon points="10,30 15,8 21,8 16,30" fill="#e07848"/>
              <polygon points="19,30 24,8 30,8 25,30" fill="#e07848" transform="rotate(-4, 24.5, 19)"/>
            </svg>
            <div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:15,fontWeight:800,color:"#fff",letterSpacing:.5}}>Otimus</div>
              <div style={{fontSize:9,color:"#374151",letterSpacing:2.5}}>SCALA · TRANSPODIESEL</div>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:20}}>
            <div style={{fontSize:11,color:"#374151"}}><span style={{color:"#f0a500",fontWeight:700}}>{FROTA_REAL.length}</span> veículos</div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{width:6,height:6,borderRadius:"50%",background:"#4ade80"}}></div>
              <span style={{fontSize:10,color:"#374151"}}>ONLINE</span>
            </div>
          </div>
        </div>
        <div style={{display:"flex",gap:2}}>
          {[["overview","📊 Visão Geral"],["frota","🚛 Frota"],["os","📋 OS"],["equipe","👷 Equipe"]].map(([k,l])=>(
            <button key={k} className={`tab ${tab===k?"on":""}`} onClick={()=>setTab(k)}>{l}</button>
          ))}
        </div>
      </div>

      <div style={{padding:"24px 28px",maxWidth:1500,margin:"0 auto"}}>

        {/* ── OVERVIEW ── */}
        {tab==="overview" && (
          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#fff"}}>Painel Geral <span style={{fontSize:11,color:"#4a5568",fontFamily:"'IBM Plex Mono',monospace",fontWeight:400}}>· 24 maio 2026</span></div>

            {/* KPIs */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
              {[
                {label:"Total Frota",val:FROTA_REAL.length,c:"#f0a500",icon:"🚛",sub:"veículos cadastrados"},
                {label:"Cavalos",val:FROTA_REAL.filter(v=>v.tipo==="Cavalo").length,c:"#3b82f6",icon:"🚛",sub:"tratores/cavalos"},
                {label:"OS Abertas",val:osAbertas,c:"#f97316",icon:"🔓",sub:"aguardando"},
                {label:"Tipos",val:Object.keys(contTipo).length,c:"#8b5cf6",icon:"📦",sub:"categorias na frota"},
              ].map((k,i)=>(
                <div key={i} className="kpi" style={{"--c":k.c}}>
                  <div style={{fontSize:22,marginBottom:8}}>{k.icon}</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:30,fontWeight:800,color:"#fff"}}>{k.val}</div>
                  <div style={{fontSize:11,color:"#94a3b8",marginTop:2,fontWeight:600}}>{k.label}</div>
                  <div style={{fontSize:9,color:"#374151",marginTop:3}}>{k.sub}</div>
                </div>
              ))}
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
              {/* Tipos */}
              <div className="card">
                <div style={{fontSize:9,color:"#4a5568",letterSpacing:2.5,marginBottom:14,textTransform:"uppercase"}}>Frota por Tipo</div>
                {Object.entries(contTipo).sort((a,b)=>b[1]-a[1]).map(([tipo,n])=>{
                  const pct = Math.round((n/FROTA_REAL.length)*100);
                  return (
                    <div key={tipo} style={{marginBottom:12}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:5}}>
                        <span style={{fontSize:12}}>{TIPO_ICONE[tipo]} {tipo}</span>
                        <span style={{fontSize:11,color:TIPO_COR[tipo]||"#f0a500",fontWeight:700}}>{n} ({pct}%)</span>
                      </div>
                      <div style={{height:5,background:"#1a2030",borderRadius:3}}>
                        <div style={{height:5,borderRadius:3,background:TIPO_COR[tipo]||"#f0a500",width:`${pct}%`,transition:"width .4s"}}></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Top Marcas */}
              <div className="card">
                <div style={{fontSize:9,color:"#4a5568",letterSpacing:2.5,marginBottom:14,textTransform:"uppercase"}}>Top Marcas</div>
                {contMarca.map(([marca,n])=>{
                  const pct = Math.round((n/FROTA_REAL.length)*100);
                  const cor = MARCA_COR[marca]||"#718096";
                  return (
                    <div key={marca} style={{marginBottom:10}}>
                      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                        <span style={{fontSize:11,fontWeight:600}}>{marca}</span>
                        <span style={{fontSize:11,color:cor,fontWeight:700}}>{n}</span>
                      </div>
                      <div style={{height:4,background:"#1a2030",borderRadius:2}}>
                        <div style={{height:4,borderRadius:2,background:cor,width:`${pct}%`}}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Últimas OS */}
            <div className="card" style={{padding:0,overflow:"hidden"}}>
              <div style={{padding:"14px 16px",fontSize:9,color:"#4a5568",letterSpacing:2.5,textTransform:"uppercase",borderBottom:"1px solid #13161e"}}>Últimas OS</div>
              <div className="th" style={{gridTemplateColumns:"50px 110px 90px 1fr 90px 90px 70px"}}>
                <span>#</span><span>Placa</span><span>Tipo</span><span>Mecânico</span><span>Peças</span><span>M.O.</span><span>Status</span>
              </div>
              {osList.slice(0,6).map(os=>(
                <div key={os.id} className="tr" style={{gridTemplateColumns:"50px 110px 90px 1fr 90px 90px 70px"}}>
                  <span style={{color:"#f0a500",fontWeight:700}}>#{os.id}</span>
                  <span style={{fontWeight:600}}>{os.placa}</span>
                  <span>{TIPO_OS_ICONE[os.tipo]} {os.tipo}</span>
                  <span>{os.mecanico}</span>
                  <span style={{color:"#94a3b8"}}>R${os.valor_pecas.toLocaleString("pt-BR")}</span>
                  <span style={{color:"#94a3b8"}}>R${os.valor_mo.toLocaleString("pt-BR")}</span>
                  <span className={os.status==="Aberta"?"badge-a":"badge-f"}>{os.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FROTA ── */}
        {tab==="frota" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#fff"}}>
                Frota <span style={{fontSize:12,color:"#4a5568",fontFamily:"'IBM Plex Mono',monospace",fontWeight:400}}>· {frotaFiltrada.length} de {FROTA_REAL.length}</span>
              </div>
              <input className="input" placeholder="Buscar placa, marca, modelo..." value={search} onChange={e=>{setSearch(e.target.value);setPage(0);}} style={{width:280}} />
            </div>

            {/* Filtros */}
            <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
              <select className="input" value={tipoFilter} onChange={e=>{setTipoFilter(e.target.value);setPage(0);}} style={{width:"auto",paddingRight:28}}>
                {tipos.map(t=><option key={t}>{t}</option>)}
              </select>
              <select className="input" value={marcaFilter} onChange={e=>{setMarcaFilter(e.target.value);setPage(0);}} style={{width:"auto",paddingRight:28}}>
                {marcas.map(m=><option key={m}>{m}</option>)}
              </select>
              <select className="input" value={anoFilter} onChange={e=>{setAnoFilter(e.target.value);setPage(0);}} style={{width:"auto",paddingRight:28}}>
                {anos.map(a=><option key={a}>{a}</option>)}
              </select>
              {(search||tipoFilter!=="Todos"||marcaFilter!=="Todas"||anoFilter!=="Todos") && (
                <button className="btn-g" onClick={()=>{setSearch("");setTipoFilter("Todos");setMarcaFilter("Todas");setAnoFilter("Todos");setPage(0);}}>✕ Limpar</button>
              )}
            </div>

            {/* Tabela */}
            <div className="card" style={{padding:0,overflow:"hidden"}}>
              <div className="th" style={{gridTemplateColumns:"36px 120px 120px 1fr 60px 60px"}}>
                <span>#</span><span>Placa</span><span>Marca</span><span>Modelo</span><span>Ano</span><span>Tipo</span>
              </div>
              {frotaPaginada.map((v,i)=>{
                const cor = TIPO_COR[v.tipo]||"#718096";
                const mcor = MARCA_COR[v.marca]||"#718096";
                return (
                  <div key={v.placa+i} className="tr" style={{gridTemplateColumns:"36px 120px 120px 1fr 60px 60px"}}>
                    <span style={{color:"#374151",fontSize:10}}>{page*PER_PAGE+i+1}</span>
                    <span style={{fontWeight:700,color:"#fff",letterSpacing:.5}}>{v.placa}</span>
                    <div style={{display:"flex",alignItems:"center",gap:6}}>
                      <div style={{width:5,height:5,borderRadius:"50%",background:mcor,flexShrink:0}}></div>
                      <span style={{color:mcor,fontWeight:600,fontSize:11}}>{v.marca}</span>
                    </div>
                    <span style={{color:"#94a3b8",fontSize:11,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v.modelo}</span>
                    <span style={{color:"#4a5568"}}>{v.ano}</span>
                    <span>
                      <span className="chip" style={{color:cor,borderColor:cor+"44",background:cor+"11",fontSize:9}}>{v.tipo}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Paginação */}
            {totalPages > 1 && (
              <div style={{display:"flex",justifyContent:"center",gap:8,alignItems:"center"}}>
                <button className="btn-g" onClick={()=>setPage(p=>Math.max(0,p-1))} disabled={page===0}>‹ Ant</button>
                <span style={{fontSize:11,color:"#4a5568"}}>Página {page+1} de {totalPages}</span>
                <button className="btn-g" onClick={()=>setPage(p=>Math.min(totalPages-1,p+1))} disabled={page===totalPages-1}>Próx ›</button>
              </div>
            )}
          </div>
        )}

        {/* ── OS ── */}
        {tab==="os" && (
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#fff"}}>
                Ordens de Serviço <span style={{fontSize:12,color:"#4a5568",fontFamily:"'IBM Plex Mono',monospace",fontWeight:400}}>· {osAbertas} abertas</span>
              </div>
              <button className="btn" onClick={()=>setShowModal(true)}>+ Nova OS</button>
            </div>
            <div style={{display:"flex",gap:8}}>
              {["Todas","Aberta","Fechada"].map(f=>(
                <button key={f} className={`btn-g ${osStatus===f?"on":""}`} onClick={()=>setOsStatus(f)}>{f}</button>
              ))}
            </div>
            <div className="card" style={{padding:0,overflow:"hidden"}}>
              <div className="th" style={{gridTemplateColumns:"50px 120px 100px 1fr 95px 90px 70px 70px"}}>
                <span>#</span><span>Placa</span><span>Tipo</span><span>Mecânico · Data</span><span>Peças R$</span><span>M.O. R$</span><span>Local</span><span>Status</span>
              </div>
              {osFiltradas.map(os=>(
                <div key={os.id} className="tr" style={{gridTemplateColumns:"50px 120px 100px 1fr 95px 90px 70px 70px"}}>
                  <span style={{color:"#f0a500",fontWeight:700}}>#{os.id}</span>
                  <span style={{fontWeight:600}}>{os.placa}</span>
                  <span style={{fontSize:11}}>{TIPO_OS_ICONE[os.tipo]} {os.tipo}</span>
                  <div>
                    <div style={{fontWeight:500,fontSize:12}}>{os.mecanico}</div>
                    <div style={{fontSize:9,color:"#4a5568"}}>{os.data}</div>
                  </div>
                  <span style={{color:"#94a3b8",fontSize:11}}>R${os.valor_pecas.toLocaleString("pt-BR")}</span>
                  <span style={{color:"#94a3b8",fontSize:11}}>R${os.valor_mo.toLocaleString("pt-BR")}</span>
                  <span style={{fontSize:10,color:"#718096"}}>{os.local}</span>
                  <span className={os.status==="Aberta"?"badge-a":"badge-f"}>{os.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── EQUIPE ── */}
        {tab==="equipe" && (
          <div style={{display:"flex",flexDirection:"column",gap:20}}>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:"#fff"}}>Equipe</div>
            {["Mecânico","Soldador","Eletricista","Lubrificador","Lavador"].map(funcao=>{
              const membros = EQUIPE.filter(m=>m.funcao===funcao);
              if(!membros.length) return null;
              const cor = FUNCAO_COR[funcao]||"#718096";
              return (
                <div key={funcao}>
                  <div style={{fontSize:9,color:"#4a5568",letterSpacing:2.5,textTransform:"uppercase",marginBottom:12,display:"flex",alignItems:"center",gap:8}}>
                    <div style={{width:3,height:14,background:cor,borderRadius:2}}></div>
                    {funcao}s · {membros.length}
                  </div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:12}}>
                    {membros.map(m=>{
                      const osM = osList.filter(o=>o.mecanico===m.nome);
                      const abertas = osM.filter(o=>o.status==="Aberta").length;
                      return (
                        <div key={m.id} style={{background:"#0f1219",border:`1px solid ${cor}22`,borderRadius:8,padding:"14px 18px",display:"flex",alignItems:"center",gap:14,transition:"all .2s"}}>
                          <div style={{width:42,height:42,borderRadius:10,background:cor+"18",border:`1px solid ${cor}33`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:700,color:cor,flexShrink:0}}>
                            {m.nome[0]}
                          </div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:700,fontSize:14,color:"#fff"}}>{m.nome}</div>
                            <div style={{fontSize:10,color:"#4a5568",marginTop:2}}>{m.funcao}</div>
                            <div style={{display:"flex",gap:6,marginTop:8}}>
                              <span style={{fontSize:9,background:"#1a2030",padding:"2px 7px",borderRadius:4,color:"#718096"}}>{osM.length} OS</span>
                              {abertas>0&&<span style={{fontSize:9,background:"#0d2018",padding:"2px 7px",borderRadius:4,color:"#4ade80",border:"1px solid #14532d"}}>{abertas} abertas</span>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal Nova OS */}
      {showModal && (
        <div className="modal-bg" onClick={e=>e.target===e.currentTarget&&setShowModal(false)}>
          <div className="modal">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:17,fontWeight:800,color:"#fff"}}>Nova Ordem de Serviço</div>
              <button onClick={()=>setShowModal(false)} style={{background:"none",border:"none",color:"#4a5568",cursor:"pointer",fontSize:22}}>×</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:14}}>
              <div className="g2">
                <div>
                  <div className="label">Placa *</div>
                  <select className="input" value={novaOS.placa} onChange={e=>setNovaOS({...novaOS,placa:e.target.value})}>
                    <option value="">Selecionar...</option>
                    {FROTA_REAL.map(v=><option key={v.placa} value={v.placa}>{v.placa} – {v.marca}</option>)}
                  </select>
                </div>
                <div>
                  <div className="label">Tipo</div>
                  <select className="input" value={novaOS.tipo} onChange={e=>setNovaOS({...novaOS,tipo:e.target.value})}>
                    {["Preventiva","Corretiva","Lavagem","Lubrificação"].map(t=><option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div className="g2">
                <div>
                  <div className="label">Mecânico *</div>
                  <select className="input" value={novaOS.mecanico} onChange={e=>setNovaOS({...novaOS,mecanico:e.target.value})}>
                    <option value="">Selecionar...</option>
                    {EQUIPE.map(m=><option key={m.id} value={m.nome}>{m.nome} ({m.funcao})</option>)}
                  </select>
                </div>
                <div>
                  <div className="label">Local</div>
                  <select className="input" value={novaOS.local} onChange={e=>setNovaOS({...novaOS,local:e.target.value})}>
                    <option>Interna</option><option>Externa</option>
                  </select>
                </div>
              </div>
              <div className="g3">
                <div><div className="label">KM</div><input className="input" type="number" placeholder="0" value={novaOS.km} onChange={e=>setNovaOS({...novaOS,km:e.target.value})}/></div>
                <div><div className="label">Peças R$</div><input className="input" type="number" placeholder="0,00" value={novaOS.valor_pecas} onChange={e=>setNovaOS({...novaOS,valor_pecas:e.target.value})}/></div>
                <div><div className="label">Mão de Obra</div><input className="input" type="number" placeholder="0,00" value={novaOS.valor_mo} onChange={e=>setNovaOS({...novaOS,valor_mo:e.target.value})}/></div>
              </div>
              <div><div className="label">Nº RC</div><input className="input" placeholder="RC-2026-001" value={novaOS.rc} onChange={e=>setNovaOS({...novaOS,rc:e.target.value})}/></div>
              <div style={{display:"flex",gap:10,marginTop:6}}>
                <button className="btn" style={{flex:1}} onClick={criarOS}>Criar OS</button>
                <button className="btn-g" onClick={()=>setShowModal(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
