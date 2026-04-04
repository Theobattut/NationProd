<?php

 namespace App\Controller;

 use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
 use Symfony\Component\HttpFoundation\Response;
 use Symfony\Component\Routing\Attribute\Route;

 class PartnerController extends AbstractController{

    #[Route('/partenaires', name: 'app_partner')]
    public function partner(): Response 

    {
        return $this->render('socials/partner.html.twig');
    }
 }