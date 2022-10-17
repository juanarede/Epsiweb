<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfba910cae5ef1abed0e3a9843338fdaa
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'Eduar\\App\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Eduar\\App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfba910cae5ef1abed0e3a9843338fdaa::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfba910cae5ef1abed0e3a9843338fdaa::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitfba910cae5ef1abed0e3a9843338fdaa::$classMap;

        }, null, ClassLoader::class);
    }
}
