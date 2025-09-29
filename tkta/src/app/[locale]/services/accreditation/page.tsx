import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const documents = [
  {
    title: "Təhsil haqqında Azərbaycan Respublikasının Qanunu",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162990/1.__T%C9%99hsil_haqq%C4%B1nda_Az%C9%99rbaycan_Respublikas%C4%B1n%C4%B1n_QANUNU_ehcuf1.pdf",
  },
  {
    title: "Elm haqqında Azərbaycan Respublikasının Qanunu",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162989/2.__Elm_haqq%C4%B1nda_Az%C9%99rbaycan_Respublikas%C4%B1n%C4%B1n_QANUNU_s4zuve.pdf",
  },
  {
    title: "Publik hüquqi şəxslər haqqında Azərbaycan Respublikasının Qanunu",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162989/3.__Publik_h%C3%BCquqi_%C5%9F%C9%99xsl%C9%99r_haqq%C4%B1nda_Az%C9%99rbaycan_Respublikas%C4%B1n%C4%B1n_QANUNU_rpbpfs.pdf",
  },
  {
    title:
      "“Azərbaycan Respublikasında təhsilin inkişafı üzrə Dövlət Strategiyası”nın həyata keçirilməsi ilə bağlı Fəaliyyət Planı”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162989/4._Az%C9%99rbaycan_Respublikas%C4%B1nda_t%C9%99hsilin_inki%C5%9Faf%C4%B1_%C3%BCzr%C9%99_D%C3%B6vl%C9%99t_Strategiyas%C4%B1_n%C4%B1n_h%C9%99yata_ke%C3%A7irilm%C9%99si_il%C9%99_ba%C4%9Fl%C4%B1_F%C9%99aliyy%C9%99t_Plan%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_krc78f.pdf",
  },
  {
    title:
      "“Azərbaycan 2030_ sosial-iqtisadi inkişafa dair Milli Prioritetlər”in təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162989/5._Az%C9%99rbaycan_2030__sosial-iqtisadi_inki%C5%9Fafa_dair_Milli_Prioritetl%C9%99r_in_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_stgmvi.pdf",
  },
  {
    title:
      "Azərbaycan Respublikasının 2022─2026-cı illərdə sosial-iqtisadi inkişaf Strategiyası",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162990/6_sxr4yg.pdf",
  },
  {
    title:
      "“Dövlət proqramlarının tərtibi, icrası, monitorinqi və qiymətləndirilməsi Qaydası”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162990/7._D%C3%B6vl%C9%99t_proqramlar%C4%B1n%C4%B1n_t%C9%99rtibi_icras%C4%B1_monitorinqi_v%C9%99_qiym%C9%99tl%C9%99ndirilm%C9%99si_Qaydas%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_lngx5w.pdf",
  },
  {
    title:
      "“2019-2023-cü illər üçün Azərbaycan Respublikasında ali təhsil sisteminin beynəlxalq rəqabətliliyinin artırılması üzrə Dövlət Proqramı”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162992/8._2019-2023-c%C3%BC_ill%C9%99r_%C3%BC%C3%A7%C3%BCn_Az%C9%99rbaycan_Respublikas%C4%B1nda_ali_t%C9%99hsil_sisteminin_beyn%C9%99lxalq_r%C9%99qab%C9%99tliliyinin_art%C4%B1r%C4%B1lmas%C4%B1_%C3%BCzr%C9%99_D%C3%B6vl%C9%99t_Proqram%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_s0n19c.pdf",
  },
  {
    title:
      "“Təhsil müəssisələrinin akkreditasiyası Qaydaları”nın təsdiq edilməsi haqqında” Azərbaycan Respublikası Nazirlər Kabinetinin 2010-cu il 28 sentyabr tarixli 167 nömrəli Qərarında dəyişiklik edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162992/10._T%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_akkreditasiyas%C4%B1_Qaydalar%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda_Az%C9%99rbaycan_Respublikas%C4%B1_Nazirl%C9%99r_Kabinetinin_2010-cu_il_28_sentyabr_tarixli_167_n%C3%B6mr%C9%99li_Q%C9%99rar%C4%B1nda_d%C9%99yi%C5%9Fiklik_edilm%C9%99si_bar%C9%99d_eux6ib.pdf",
  },
  {
    title:
      "“Azərbaycan Respublikasının ömürboyu təhsil üzrə Milli Kvalifikasiyalar Çərçivəsi”nin təsdiq edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162993/11._Az%C9%99rbaycan_Respublikas%C4%B1n%C4%B1n_%C3%B6m%C3%BCrboyu_t%C9%99hsil_%C3%BCzr%C9%99_Milli_Kvalifikasiyalar_%C3%87%C9%99r%C3%A7iv%C9%99si_nin_t%C9%99sdiq_edilm%C9%99si_bar%C9%99d%C9%99.doc_h7d2lb.pdf",
  },
  {
    title:
      "“Dövlət və bələdiyyə tərəfindən yaradılan ali təhsil müəssisəsinin Nümunəvi Nizamnaməsi”nin təsdiq edilməsi və “ Ali təhsil müəssisəsinin Nümunəvi Nizamnaməsi”nin və “ Azərbaycan Respublikası Nazirlər Kabinetinin dəyişiklik edilmiş bəzi qərarlarının siyahısı”nın təsdiq edilməsi haqqında” Azərbaycan Respublikası Nazirlər Kabinetinin 2011-ci il 21 yanvar tarixli 9 nömrəli Qərarında dəyişiklik edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162993/12._D%C3%B6vl%C9%99t_v%C9%99_b%C9%99l%C9%99diyy%C9%99_t%C9%99r%C9%99find%C9%99n_yarad%C4%B1lan_ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99sinin_N%C3%BCmun%C9%99vi_Nizamnam%C9%99si_nin_t%C9%99sdiq_edilm%C9%99si_v%C9%99_Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99sinin_N%C3%BCmun%C9%99vi_Nizamnam%C9%99si_nin_v%C9%99_Az%C9%99rbaycan_Respublikas%C4%B1_Nazirl%C9%99r_Kabi_cpoyez.pdf",
  },
  {
    title:
      "“Ali təhsil pilləsinin dövlət standartı və proqramı”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162994/13._Ali_t%C9%99hsil_pill%C9%99sinin_d%C3%B6vl%C9%99t_standart%C4%B1_v%C9%99_proqram%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_sx1ks1.pdf",
  },
  {
    title:
      "“Ali təhsil müəssisələrinin bakalavriat və magistratura səviyyələrində, əsas (baza ali) tibb təhsilində və Azərbaycan Milli Elmlər Akademiyasının magistratura səviyyəsində kredit sistemi ilə tədrisin təşkili Qaydaları”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162995/14._Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_bakalavriat_v%C9%99_magistratura_s%C9%99viyy%C9%99l%C9%99rind%C9%99_%C9%99sas_baza_ali_tibb_t%C9%99hsilind%C9%99_v%C9%99_Az%C9%99rbaycan_Milli_Elml%C9%99r_Akademiyas%C4%B1n%C4%B1n_magistratura_s%C9%99viyy%C9%99sind%C9%99_kredit_sistemi_il%C9%99_t%C9%99drisin_t%C9%99%C5%9F_ragjlb.pdf",
  },
  {
    title:
      "Təhsil müəssisələrinin tikintisinə, maddi-texniki təchizatına dair vahid normalar, ümumi sanitariya-gigiyena tələbləri, şagird yerləri ilə təminat normativləri_nin təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162996/15._T%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_tikintisin%C9%99_maddi-texniki_t%C9%99chizat%C4%B1na_dair_vahid_normalar_%C3%BCmumi_sanitariya-gigiyena_t%C9%99l%C9%99bl%C9%99ri_%C5%9Fagird_yerl%C9%99ri_il%C9%99_t%C9%99minat_normativl%C9%99ri_nin_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_qviu2s.pdf",
  },
  {
    title:
      "“Magistratura təhsilinin məzmunu, təşkili və “magistr” dərəcələrinin verilməsi Qaydaları”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162996/16._Magistratura_t%C9%99hsilinin_m%C9%99zmunu_t%C9%99%C5%9Fkili_v%C9%99_magistr_d%C9%99r%C9%99c%C9%99l%C9%99rinin_verilm%C9%99si_Qaydalar%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_wimz0e.pdf",
  },
  {
    title:
      "“Bakalavriat (əsas (baza ali) tibb təhsili) təhsilinin məzmunu və təşkili Qaydaları”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162997/17._Bakalavriat_%C9%99sas_baza_ali_tibb_t%C9%99hsili_t%C9%99hsilinin_m%C9%99zmunu_v%C9%99_t%C9%99%C5%9Fkili_Qaydalar%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_i0ysaa.pdf",
  },
  {
    title:
      "“Əlavə təhsilin məzmunu, təşkili və əlavə təhsilin hər hansı istiqaməti üzrə təhsil almış şəxslərə müvafiq sənədin verilməsi Qaydası”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759162999/18._%C6%8Flav%C9%99_t%C9%99hsilin_m%C9%99zmunu_t%C9%99%C5%9Fkili_v%C9%99_%C9%99lav%C9%99_t%C9%99hsilin_h%C9%99r_hans%C4%B1_istiqam%C9%99ti_%C3%BCzr%C9%99_t%C9%99hsil_alm%C4%B1%C5%9F_%C5%9F%C9%99xsl%C9%99r%C9%99_m%C3%BCvafiq_s%C9%99n%C9%99din_verilm%C9%99si_Qaydas%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_ifej3v.pdf",
  },
  {
    title:
      "Təhsil müəssisələrinin pedaqoji işçilərinin dərs yükü normalarının müəyyən edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163000/19._T%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_pedaqoji_i%C5%9F%C3%A7il%C9%99rinin_d%C9%99rs_y%C3%BCk%C3%BC_normalar%C4%B1n%C4%B1n_m%C3%BC%C9%99yy%C9%99n_edilm%C9%99si_haqq%C4%B1nda.doc_1_cdsi1h.pdf",
  },
  {
    title:
      "“Ali (orta ixtisas) təhsili müəssisələri tələbələrinin ixtisas üzrə təcrübəsinin keçirilməsi haqqında Əsasnamə”nin təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163001/20._Ali_orta_ixtisas_t%C9%99hsili_m%C3%BC%C9%99ssis%C9%99l%C9%99ri_t%C9%99l%C9%99b%C9%99l%C9%99rinin_ixtisas_%C3%BCzr%C9%99_t%C9%99cr%C3%BCb%C9%99sinin_ke%C3%A7irilm%C9%99si_haqq%C4%B1nda_%C6%8Fsasnam%C9%99_nin_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_sikzpf.pdf",
  },
  {
    title:
      "“Doktorantlara, ali təhsil, orta ixtisas və peşə təhsili müəssisələrinin, həmçinin Azərbaycan Milli Elmlər Akademiyasının magistratura səviyyəsinin tələbələrinə təqaüdlərin təyin olunması və ödənilməsi Qaydası”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163002/21._Doktorantlara_ali_t%C9%99hsil_orta_ixtisas_v%C9%99_pe%C5%9F%C9%99_t%C9%99hsili_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_h%C9%99m%C3%A7inin_Az%C9%99rbaycan_Milli_Elml%C9%99r_Akademiyas%C4%B1n%C4%B1n_magistratura_s%C9%99viyy%C9%99sinin_t%C9%99l%C9%99b%C9%99l%C9%99rin%C9%99_t%C9%99qa%C3%BCdl%C9%99rin_t%C9%99yin_olunmas%C4%B1_v%C9%99_%C3%B6d%C9%99nilm%C9%99si_Q_mgysal.pdf",
  },
  {
    title:
      "“Ali təhsil müəssisələrində yeni maliyyələşmə mexanizminin tətbiq edilməsi haqqında” Azərbaycan Respublikası Nazirlər Kabinetinin 2010-cu il 25 iyun tarixli 120 nömrəli qərarında dəyişikliklər edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163002/22._Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rind%C9%99_yeni_maliyy%C9%99l%C9%99%C5%9Fm%C9%99_mexanizminin_t%C9%99tbiq_edilm%C9%99si_haqq%C4%B1nda_Az%C9%99rbaycan_Respublikas%C4%B1_Nazirl%C9%99r_Kabinetinin_2010-cu_il_25_iyun_tarixli_120_n%C3%B6mr%C9%99li_q%C9%99rar%C4%B1nda_d%C9%99yi%C5%9Fiklikl%C9%99r_edilm%C9%99si_b_pyqyxt.pdf",
  },
  {
    title:
      "“Təhsil haqqında dövlət sənədlərinin nümunələri və onların verilməsi Qaydaları”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163005/23._T%C9%99hsil_haqq%C4%B1nda_d%C3%B6vl%C9%99t_s%C9%99n%C9%99dl%C9%99rinin_n%C3%BCmun%C9%99l%C9%99ri_v%C9%99_onlar%C4%B1n_verilm%C9%99si_Qaydalar%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_mfbl1l.pdf",
  },
  {
    title:
      "Ali və orta ixtisas təhsili müəssisələrinin fəaliyyəti ilə bağlı Əsasnamələrin təsdiq edilməsi haqqında.doc (1)",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163005/24._Ali_v%C9%99_orta_ixtisas_t%C9%99hsili_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_f%C9%99aliyy%C9%99ti_il%C9%99_ba%C4%9Fl%C4%B1_%C6%8Fsasnam%C9%99l%C9%99rin_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda.doc_1_h3nnnu.pdf",
  },
  {
    title:
      "“Ali təhsil müəssisəsinin kitabxanasının Nümunəvi Əsasnaməsi”nin və “Ümumi təhsil müəssisəsinin kitabxanasının Nümunəvi Əsasnaməsi”nin təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163005/25._Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99sinin_kitabxanas%C4%B1n%C4%B1n_N%C3%BCmun%C9%99vi_%C6%8Fsasnam%C9%99si_nin_v%C9%99_%C3%9Cmumi_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99sinin_kitabxanas%C4%B1n%C4%B1n_N%C3%BCmun%C9%99vi_%C6%8Fsasnam%C9%99si_nin_t%C9%99sdiq_edilm%C9%99si_haqq%C4%B1nda_1_f3v830.pdf",
  },
  {
    title:
      "“Ali təhsilin magistratura səviyyəsi üzrə ixtisasların (ixtisaslaşmaların) Təsnifatı”nın, “Rezidenturada həkim-mütəxəssis hazırlığı aparılan ixtisasların Təsnifatı”nın və “ Azərbaycan Respublikası Nazirlər Kabinetinin qüvvədən düşmüş bəzi qərarlarının Siyahısı”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163013/26._Ali_t%C9%99hsilin_magistratura_s%C9%99viyy%C9%99si_%C3%BCzr%C9%99_ixtisaslar%C4%B1n_ixtisasla%C5%9Fmalar%C4%B1n_T%C9%99snifat%C4%B1_n%C4%B1n_Rezidenturada_h%C9%99kim-m%C3%BCt%C9%99x%C9%99ssis_haz%C4%B1rl%C4%B1%C4%9F%C4%B1_apar%C4%B1lan_ixtisaslar%C4%B1n_T%C9%99snifat%C4%B1_n%C4%B1n_v%C9%99_Az%C9%99rbaycan_Respublikas%C4%B1_Nazirl%C9%99_rkeidm.pdf",
  },
  {
    title:
      "“Ali təhsilin bakalavriat (əsas (baza ali) tibb təhsili) səviyyəsi üzrə ixtisasların (proqramların) Təsnifatı”nın təsdiq edilməsi və Azərbaycan Respublikası Nazirlər Kabinetinin “ Ali təhsilin bakalavriat səviyyəsi ixtisaslarının (proqramlarının) Təsnifatı”nın təsdiq edilməsi haqqında” 2009-cu il 12 yanvar tarixli 8 nömrəli, “ Ali təhsilin bakalavriat və magistratura səviyyələri üzrə bəzi ixtisasların (ixtisaslaşmaların) Təsnifatı”nın təsdiq edilməsi haqqında” 2011-ci il 31 oktyabr tarixli 177 nömrəli və “ Ali təhsil pilləsində tibb təhsilinin əsas təhsili üzrə ixtisasların Təsnifatı”nın təsdiq edilməsi və “ Ali təhsilin bakalavriat səviyyəsi ixtisaslarının (proqramlarının) Təsnifatı”nın təsdiq edilməsi haqqında” Azərbaycan Respublikası Nazirlər Kabinetinin 2009-cu il 12 yanvar tarixli 8 nömrəli Qərarında dəyişikliklər edilməsi barədə” 2012-ci il 24 dekabr tarixli 314 nömrəli qərarlarında dəyişikliklər edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163008/27._Ali_t%C9%99hsilin_bakalavriat_%C9%99sas_baza_ali_tibb_t%C9%99hsili_s%C9%99viyy%C9%99si_%C3%BCzr%C9%99_ixtisaslar%C4%B1n_proqramlar%C4%B1n_T%C9%99snifat%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_v%C9%99_Az%C9%99rbaycan_Respublikas%C4%B1_Nazirl%C9%99r_Kabinetinin_Ali_t%C9%99hsilin_bakalavriat_qwnimp.pdf",
  },
  {
    title:
      "“Doktorantlara, ali təhsil, orta ixtisas və peşə təhsili müəssisələrinin, həmçinin Azərbaycan Milli Elmlər Akademiyasının magistratura səviyyəsinin tələbələrinə təqaüdlərin təyin olunması və ödənilməsi Qaydası”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163012/28._Doktorantlara_ali_t%C9%99hsil_orta_ixtisas_v%C9%99_pe%C5%9F%C9%99_t%C9%99hsili_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_h%C9%99m%C3%A7inin_Az%C9%99rbaycan_Milli_Elml%C9%99r_Akademiyas%C4%B1n%C4%B1n_magistratura_s%C9%99viyy%C9%99sinin_t%C9%99l%C9%99b%C9%99l%C9%99rin%C9%99_t%C9%99qa%C3%BCdl%C9%99rin_t%C9%99yin_olunmas%C4%B1_v%C9%99_%C3%B6d%C9%99nilm%C9%99si_Q_bpcut3.pdf",
  },
  {
    title:
      "Azərbaycan Respublikası ali təhsil müəssisələri tələbələrinin bakalavr pilləsində dövlət attestasiyası haqqında Əsasnamə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163014/29._Az%C9%99rbaycan_Respublikas%C4%B1_ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99ri_t%C9%99l%C9%99b%C9%99l%C9%99rinin_bakalavr_pill%C9%99sind%C9%99_d%C3%B6vl%C9%99t_attestasiyas%C4%B1_haqq%C4%B1nda_%C6%8Fsasnam%C9%99.doc_lvas67.pdf",
  },
  {
    title:
      "“2019-2023-cü illər üçün Azərbaycan Respublikasında ali təhsil sisteminin beynəlxalq rəqabətliliyinin artırılması üzrə Dövlət Proqramı” çərçivəsində beynəlxalq ikili diplom proqramlarının həyata keçiriləcəyi xarici tərəfdaş ali təhsil müəssisələrinin, ixtisas proqramlarının və təhsil səviyyələrinin seçim Qaydaları”nın təsdiq edilməsi haqqında",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163110/30._2019-2023-c%C3%BC_ill%C9%99r_%C3%BC%C3%A7%C3%BCn_Az%C9%99rbaycan_Respublikas%C4%B1nda_ali_t%C9%99hsil_sisteminin_beyn%C9%99lxalq_r%C9%99qab%C9%99tliliyinin_art%C4%B1r%C4%B1lmas%C4%B1_%C3%BCzr%C9%99_D%C3%B6vl%C9%99t_Proqram%C4%B1_%C3%A7%C9%99r%C3%A7iv%C9%99sind%C9%99_beyn%C9%99lxalq_ikili_diplom_proqramlar%C4%B1n%C4%B1n_h%C9%99yata_ke%C3%A7iril%C9%99_menlyr.pdf",
  },
  {
    title:
      "“Ali təhsil müəssisələrində kafedra müdiri, dekan və dekan müavini vəzifələrinin tutulması Qaydaları”nın təsdiq edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759163111/31._Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rind%C9%99_kafedra_m%C3%BCdiri_dekan_v%C9%99_dekan_m%C3%BCavini_v%C9%99zif%C9%99l%C9%99rinin_tutulmas%C4%B1_Qaydalar%C4%B1_n%C4%B1n_t%C9%99sdiq_edilm%C9%99si_bar%C9%99d%C9%99.doc_ekanja.pdf",
  },
  {
    title:
      "“Ali təhsil müəssisələrinin bakalavriat və magistratura səviyyələrində, əsas (baza ali) tibb təhsilində təhsilalanların köçürülməsi, xaric edilməsi, bərpa olunması və akademik məzuniyyət götürülməsinə dair Qaydalar”ın təsdiq edilməsi barədə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165971/32._Ali_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_bakalavriat_v%C9%99_magistratura_s%C9%99viyy%C9%99l%C9%99rind%C9%99_%C9%99sas_baza_ali_tibb_t%C9%99hsilind%C9%99_t%C9%99hsilalanlar%C4%B1n_k%C3%B6%C3%A7%C3%BCr%C3%BClm%C9%99si_xaric_edilm%C9%99si_b%C9%99rpa_olunmas%C4%B1_v%C9%99_akademik_m%C9%99zuniyy%C9%99t_g%C3%B6t%C3%BCr%C3%BClm%C9%99sin%C9%99_da_flzfd4.pdf",
  },
  {
    title:
      "Təhsil, təlim - tərbiyə müəssisələrinin rəhbər, inzibati - təsərrüfat, tədris - köməkçi və digər işçilərinin tutduqları vəzifə ilə yanaşı ixtisasları üzrə dərs yükü (pedaqoji iş) aparmaları haqqında Normalar",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165971/33_-_T%C9%99hsil_t%C9%99lim_-_t%C9%99rbiy%C9%99_m%C3%BC%C9%99ssis%C9%99l%C9%99rinin_r%C9%99hb%C9%99r_inzibati_-_t%C9%99s%C9%99rr%C3%BCfat_t%C9%99dris_-_k%C3%B6m%C9%99k%C3%A7i_v%C9%99_dig%C9%99r_i%C5%9F%C3%A7il%C9%99rinin_tutduqlar%C4%B1_v%C9%99zif%C9%99_il%C9%99_yana%C5%9F%C4%B1_ixtisaslar%C4%B1_%C3%BCzr%C9%99_d%C9%99rs_y%C3%BCk%C3%BC_pedaqoji_i%C5%9F_aparmalar%C4%B1_haqq%C4%B1nda_Normalar_sncaph.pdf",
  },
  {
    title:
      "Magistrlik dissertasiyasının müdafiə üçün ixtisaslaşdırılmış Elmi şuralar haqqında Əsasnamə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165971/34._Magistrlik_dissertasiyas%C4%B1n%C4%B1n_m%C3%BCdafi%C9%99_%C3%BC%C3%A7%C3%BCn_ixtisasla%C5%9Fd%C4%B1r%C4%B1lm%C4%B1%C5%9F_Elmi_%C5%9Furalar_haqq%C4%B1nda_%C6%8Fsasnam%C9%99.doc_mmwdpe.pdf",
  },
  {
    title:
      "Professor-müəllim heyətinin tədris işi üçün vaxt normasının müəyyənləşdirilməsi, elmitədqiqat, elmi-metodiki və digər işlərin əsas növləri barədə cədvəl",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165972/35_-_Professor-m%C3%BC%C9%99llim_hey%C9%99tinin_t%C9%99dris_i%C5%9Fi_%C3%BC%C3%A7%C3%BCn_vaxt_normas%C4%B1n%C4%B1n_m%C3%BC%C9%99yy%C9%99nl%C9%99%C5%9Fdirilm%C9%99si_elmit%C9%99dqiqat_elmi-metodiki_v%C9%99_dig%C9%99r_i%C5%9Fl%C9%99rin_%C9%99sas_n%C3%B6vl%C9%99ri_bar%C9%99d%C9%99_c%C9%99dv%C9%99l_safcif.pdf",
  },
  {
    title:
      "Аli təhsil müəssisəsində təhsilalanların еlmi tədqiqat işinin təşkili haqqında Əsasnamə",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165971/36_-_%D0%90li_t%C9%99hsil_m%C3%BC%C9%99ssis%C9%99sind%C9%99_t%C9%99hsilalanlar%C4%B1n_%D0%B5lmi_t%C9%99dqiqat_i%C5%9Finin_t%C9%99%C5%9Fkili_haqq%C4%B1nda_%C6%8FSASNAM%C6%8F_ebcqfu.pdf",
  },
  {
    title:
      "Ali və orta ixtisas təhsili müəssisələri tələbələrinin ixtisas üzrə təcrübə keçmə Qaydası",
    link: "https://res.cloudinary.com/dtwyjdkb1/image/upload/v1759165975/37_-_Ali_v%C9%99_orta_ixtisas_t%C9%99hsili_m%C3%BC%C9%99ssis%C9%99l%C9%99ri_t%C9%99l%C9%99b%C9%99l%C9%99rinin_ixtisas_%C3%BCzr%C9%99_t%C9%99cr%C3%BCb%C9%99_ke%C3%A7m%C9%99_QAYDASI_efbeje.pdf",
  },
];

export default function Accreditation() {
  return (
    <section className="w-full flex flex-col gap-16 items-center">
      <h1 className="uppercase text-4xl text-center w-full px-16 pt-16">
        Akkredİtasİya
      </h1>

      <Tabs
        defaultValue="accreditation-process"
        className="w-full px-16 flex flex-col gap-16"
      >
        <TabsList>
          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="accreditation-process"
          >
            Akkreditasiya prosesi
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="regulatory_documents"
          >
            Normativ sənəd və təlimatlar
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="council"
          >
            Akkreditasiya şurası
          </TabsTrigger>

          <TabsTrigger
            className="w-1/2 px-2 text-base text-textPrimary data-[state=active]:font-bold data-[state=active]:text-textPrimary font-semibold"
            value="commission"
          >
            Apellyasiya komissiyası
          </TabsTrigger>
        </TabsList>

        <TabsContent value="accreditation-process" className="text-justify">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold">
              Akkreditasiya prosesi institusional və proqram olmaqla iki növə
              ayrılır.
            </h2>

            <ol className="list-decimal flex flex-col gap-4 list-inside">
              <li>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold">İnstitusional akkreditasiya</h3>

                  <div>
                    Təhsil müəssisəsinin akkreditasiyası onun fəaliyyətinin
                    qəbul olunmuş dövlət təhsil standartlarına və digər normativ
                    hüquqi aktların tələblərinə uyğunluğunun yoxlanılması
                    məqsədi ilə aparılır. Proses təhsil müəssisəsinin
                    statusunun, hər bir ixtisas (proqram) üzrə təhsilalanların
                    say həddinin müəyyən edilməsi, onun fəaliyyətinin növbəti
                    müddətə uzadılması üçün hüquqi təminat yaradır. Təhsil
                    müəssisəsinin akkreditasiyası Təhsildə Keyfiyyət Təminatı
                    Agentliyi tərəfindən 5 ildən bir həyata keçirilir. Müvafiq
                    keyfiyyət sənədinin – şəhadətnamənin verilməsi ilə başa
                    çatır.
                  </div>

                  <h4 className="font-bold">
                    Akkreditasiyaya dair dövlət rüsumu
                  </h4>

                  <div>
                    Təhsil müəssisəsinin akkreditasiyasına görə{" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary italic hover:underline"
                      href="https://e-qanun.az/framework/2860"
                    >
                      “Dövlət rüsumu haqqında”
                    </Link>{" "}
                    Azərbaycan Respublikasının Qanununda təsbit olunmuş məbləğdə
                    dövlət rüsumu ödənilir. Qanuna əsasən ali təhsil
                    müəssisələrinin institusional akkreditasiyaya dair rüsumun
                    məbləği 20.000 AZN təşkil edir.
                  </div>
                </div>
              </li>

              <li>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold">Proqram akkreditasiyası</h3>

                  <div>
                    Təhsil müəssisələrinin akkreditasiyasının ikinci növü
                    proqram akkreditasiyasıdır. Proqram akkreditasiyası qüvvədə
                    olan müvafiq təhsil pillələri üzrə təsnifatlara əsasən
                    təşkil olunur. Təhsil müəssisələrində tədris edilən təhsil
                    proqramlarının maddi-texniki və tədris bazasını,
                    təhsilverənlərin keyfiyyət göstəricilərini və
                    təhsilalanların bilik, bacarıq və vərdişlərinin səviyyəsinin
                    əmək bazarının tələblərinə uyğunluğunu və proqramın icrasını
                    qiymətləndirir. Hər bir ixtisas üzrə kadr hazırlığı
                    potensialının və təhsilalanların say həddinin müəyyən
                    olunmasına hüquqi təminat yaradır. Proqram akkreditasiyası
                    üçün dövlət rüsumu nəzərdə tutulmur.
                  </div>

                  <h4 className="font-bold">
                    Təhsil müəssisələrinin akkreditasiyası elektron informasiya
                    altsistemi
                  </h4>

                  <div>
                    Akkreditasiyaya dair müraciətlər yalnız elektron qaydada
                    edilir. Həmin müraciətlər{" "}
                    <span className="font-bold">
                      “Təhsil Mərkəzləşdirilmiş İnformasiya Sistemi”
                    </span>
                    ndə (TMİS) qeydiyyata alınır və hər bir təhsil müəssisəsinə
                    sistemdə şəxsi kabinet açılır. Müraciət Agentliyə daxil
                    olduqdan sonra təhsil müəssisəsinin müraciətdə göstərdiyi
                    əlaqə telefonuna və elektron poçt ünvanına qeydiyyat şifrəsi
                    göndərilir. Müəssisə qeydiyyat şifrəsi vasitəsilə onun üçün
                    açılmış şəxsi kabinetdə olan məlumatları əldə edə və
                    müraciətinin statusunu izləyə bilər.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="regulatory_documents">
          <div className="flex flex-col gap-6">
            <ul className="list-disc pl-6 list-inside flex flex-col gap-4">
              {documents.map((doc, index) => (
                <li key={index}>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-textPrimary italic hover:underline"
                    href={doc.link}
                  >
                    {doc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="council">
          <div className="flex flex-col gap-4 px-16 text-justify">
            <div>
              <span className="font-bold">Akkreditasiya şurası</span> -
              Akkreditasiya şurası akkreditasiyanın nəticələrinə dair yekun
              qərar qəbul etmək səlahiyyətinə malik olan orqandır. Akkreditasiya
              Şurasının fəaliyyəti Nazirlik tərəfindən təsdiq edilmiş
              Akkreditasiya Şurasının Əsasnaməsi ilə tənzimlənir. Akkreditasiya
              Şurasına Azərbaycan Respublikasının elm və təhsil naziri rəhbərlik
              edir. Şura ictimai əsaslarla fəaliyyət göstərir.
            </div>

            <h4 className="font-bold">
              Akkreditasiya Şurasının tərkibinə aşağıdakı şəxslər daxil
              edilirlər:
            </h4>

            <ol className="list-decimal pl-6 list-inside">
              <li>
                yerli və xarici təhsil və ya müvafiq elmi tədqiqat sahələrinin
                mütəxəssisləri;
              </li>

              <li>işəgötürənlər;</li>

              <li>təhsilalanlar və ya qanuni nümayəndələr;</li>

              <li>
                tabeliyində təhsil müəssisəsi olan nazirliklərin, təşkilatların
                və idarələrin nümayəndələri;
              </li>

              <li>qeyri-hökumət təşkilatlarının nümayəndələri.</li>
            </ol>

            <Image
              src="https://res.cloudinary.com/dtwyjdkb1/image/upload/v1737959769/accreditation/k6e9y0pdzof2sfjdtnhq.png"
              alt="accreditation structure"
              className="w-full rounded shadow"
              width={900}
              height={900}
            />

            <h4 className="font-bold">
              Akkreditasiya Şurası akkreditasiya prosesində göstərdiyi
              fəaliyyətlər
            </h4>

            <div>
              Akkreditasiya Şurası akkreditasiya prosesində aşağıdakı
              hərəkətləri yerinə yetirir:
            </div>

            <ul className="list-disc pl-6 list-inside">
              <li>
                Akkreditasiya Komissiyası tərəfindən tərtib edilmiş Yekun
                Hesabatların müzakirəsini həyata keçirir;
              </li>

              <li>
                Tələb olunduğu halda Yekun Hesabatların müzakirəsinə təhsil
                müəssisəsini, Akkreditasiya Komissiyasını, eləcə də müstəqil
                ekspertləri dəvət edir;
              </li>

              <li>
                müzakirənin nəticələrindən asılı olaraq akkreditasiya
                qiymətləndirməsinə dair müvafiq qərarlar verir;
              </li>

              <li>
                təqdim edilmiş Yekun Hesabat və ona əlavə olunan sənədlər
                müvafiq qərarın verilməsində yetərli olmadıqda onu Agentliyə
                geri qaytarır.
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="commission">
          <div className="flex flex-col gap-4 text-justify">
            <p>
              Azərbaycan Respublikası Nazirlər Kabinetinin 2010-cu il 28
              sentyabr tarixli, 167 nömrəli qərarı ilə təsdiq edilmiş “Təhsil
              müəssisələrinin akkreditasiyası Qaydaları”na əsasən Agentlik
              tərəfindən Akkreditasiya Komissiyasının fəaliyyətinə dair
              şikayətlərə baxan kollegial orqan, Apellyasiya Komissiyası
              yaradılır. Bununla bağlı olaraq, Agentliyin 07.11.2024-cü il
              tarixli, 3-29-61/3-2-167F/2024 nömrəli və 15.11.2024-cü il
              tarixli, 3-29-61/3-2-169F/2024 nömrəli əmrləri ilə müvafiq olaraq
              Apellyasiya Komissiyasının tərkibi və Əsasnaməsi yenidən təsdiq
              edilmişdir.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
