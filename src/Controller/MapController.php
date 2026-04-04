<?php

 namespace App\Controller;

 use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
 use Symfony\Component\HttpFoundation\Response;
 use Symfony\Component\Routing\Attribute\Route;

 class MapController extends AbstractController{

    #[Route('/carte-interactive', name: 'app_map')]
    public function card(): Response 

    {
        return $this->render('map/index.html.twig');
    }
    

}