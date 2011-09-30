/*jshint white: false, strict: false, plusplus: false, onevar: false,
  nomen: false */
/*global gladius: false, document: false, window: false, module: false, start,
  test: false, expect: false, ok: false, notEqual: false, stop, QUnit: false */


(function() {
    
    var engine = null;
    
    module('common/Math/Vector3', {
        setup: function () {
            
        }
    });
    
    test('Basic', function(){
        expect(6);
        
        var vec3 = new math.Vector3(1, 2, 3);
        ok(
            vec3, 'Construct a Vector3 instance'
        );
        ok(
            vec3 instanceof math.ARRAY_TYPE,
            'vec3 is an instance of ARRAY_TYPE'
        );
        deepEqual(
                new math.ARRAY_TYPE( [1, 2, 1] ),
                new math.Vector3( 1, 2, 3 ),
                'Test for equality new Vector'
        );
        deepEqual(
                new math.ARRAY_TYPE( [1, 2, 1] ),
                vec3,
                'Test for equality previously contructed Vector'
        );
        ok(
                3 === vec3.length,
                'vec3 has length 3'
        );
        ok(
                vec3[0] === 1 && vec3[1] === 2 && vec3[2] === 3,
                'vec3 elements are [1, 2, 3]'
        );
        
    });
    
    test( 'Defaults', function() {
        expect( 1 );

        deepEqual(
                new math.Vector3(),
                new math.Vector3( 0, 0, 0 ),
                'Default vector is the zero vector'
        );
    });
    
    test( 'Constants', function() {
        expect( 4 ); //should be 5

        deepEqual(
                math.vector3.x,
                new math.Vector3( 1.0, 0.0, 0.0),
                'Vector3.x'
        );
        deepEqual(
                math.vector3.y,
                new math.Vector3( 0.0, 1.0, 0.0  ),
                'Vector3.y'
        );
        deepEqual( /* not sure */
                math.vector3.z,
                new math.Vector3( 0.0, 0.0, 1.0),
                'Vector3.z'
        );
        deepEqual(
                math.vector3.zero,
                new math.Vector3( 0.0, 0.0, 0.0 ),
                'Vector3.zero'
        );
        deepEqual(
                math.vector3.one,
                new math.Vector3( 1.0, 1.0, 1.0 ),
                'Vector3.one'
        );
    });
    
    test( 'Clone', function() {
        expect( 1 );

        var vec1 = new math.Vector3( 0, 1, 2 );
        deepEqual(
                new math.Vector3( vec1 ),
                vec1,
                'Clone of vector is the same'
        );
    });
    
    test( 'Equality', function() {
        expect( 3 );

        var vec1 = new math.Vector3( 1, 1, 1 );
        var vec2 = new math.Vector3( 1, 1, 1 );
        var vec3 = new math.Vector3( 1, 2, 3 );

        ok(
                math.vector3.equal( vec1, vec2 ),
                'Two identical vectors are equal'
        );
        ok(
                !math.vector3.equal( vec2, vec3 ),
                'Two different vectors are not equal'
        );    
        ok(
                !math.vector3.equal( vec1, vec3 ),
                'Two different vectors are not equal'
        );
    });
    
    test( 'Length', function() {
        expect( 1 );

        var vec1 = new math.Vector2( 1, 1, 1 );
        ok(
                Math.sqrt( 2 ) === math.vector2.length( vec1 ),
                '|(1, 1)| = sqrt(2)'
        );
    });
}());
